import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { Endpoint } from "../types.js";
export declare const ENDPOINT_CHECKER_TOOL: Tool;
export declare function findEndpoint(routePath: string): Endpoint | null;
export declare function handleCheckEndpoint(args: unknown): {
    content: Array<{
        type: string;
        text: string;
    }>;
};
