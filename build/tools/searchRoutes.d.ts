import { Tool } from "@modelcontextprotocol/sdk/types.js";
export declare const ROUTE_SEARCHER_TOOL: Tool;
export declare function searchRoutes(query: string): string[];
export declare function handleSearchRoutes(args: unknown): {
    content: Array<{
        type: string;
        text: string;
    }>;
};
