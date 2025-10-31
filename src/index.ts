#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// Import tools
import { ROUTE_SEARCHER_TOOL, handleSearchRoutes } from "./tools/searchRoutes.js";
import { ENDPOINT_CHECKER_TOOL, handleCheckEndpoint } from "./tools/checkEndpoint.js";
import { RESPONSE_CHECKER_TOOL, handleCheckResponse } from "./tools/checkResponse.js";
import { SEARCH_FEATURES_TOOL, handleSearchFeatures } from "./tools/searchFeatures.js";

// Server setup
const server = new Server(
  {
    name: "vedicastroapi-documentation-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [ROUTE_SEARCHER_TOOL, ENDPOINT_CHECKER_TOOL, RESPONSE_CHECKER_TOOL, SEARCH_FEATURES_TOOL],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    if (name === "search_routes") {
      return handleSearchRoutes(args);
    }

    if (name === "check_endpoint") {
      return handleCheckEndpoint(args);
    }

    if (name === "check_response") {
      return handleCheckResponse(args);
    }

    if (name === "search_features") {
      return handleSearchFeatures(args);
    }

    return {
      content: [
        {
          type: "text",
          text: `Unknown tool: ${name}`,
        },
      ],
      isError: true,
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
      isError: true,
    };
  }
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Vedic Astro API Documentation MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
