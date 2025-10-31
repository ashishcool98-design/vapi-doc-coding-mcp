import { Tool } from "@modelcontextprotocol/sdk/types.js";
import routes from "../../routes.cjs";
import { RouteSearchArgs } from "../types.js";

export const ROUTE_SEARCHER_TOOL: Tool = {
  name: "search_routes",
  description:
    "Search for API routes in the Vedic Astro API. Provide a search query (e.g., 'daily sun', 'matching', 'dasha') to find matching routes. Returns a list of available routes that match your query.",
  inputSchema: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "Search query to find matching routes (e.g., 'daily-sun', 'matching', 'horoscope')",
      },
    },
    required: ["query"],
  },
};

export function searchRoutes(query: string): string[] {
  const lowerQuery = query.toLowerCase().trim();
  
  // If empty query, return all routes
  if (!lowerQuery) {
    return routes;
  }

  // Search for matching routes
  const matches = routes.filter((route: string) =>
    route.toLowerCase().includes(lowerQuery)
  );

  return matches;
}

export function handleSearchRoutes(args: unknown): { content: Array<{ type: string; text: string }> } {
  const { query } = args as RouteSearchArgs;
  const matches = searchRoutes(query);

  if (matches.length === 0) {
    let out = `# No matches for "${query}"\n\nListing all available routes (${routes.length}):\n\n`;
    for (const r of routes) {
      out += `- ${r}\n`;
    }
    return { content: [{ type: "text", text: out }] };
  }

  let output = `# Route Search Results\n\n`;
  output += `Found ${matches.length} route(s) matching "${query}":\n\n`;
  matches.forEach((route) => {
    output += `- ${route}\n`;
  });

  return {
    content: [{ type: "text", text: output }],
  };
}

