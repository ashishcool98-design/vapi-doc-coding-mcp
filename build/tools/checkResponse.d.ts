import { Tool } from "@modelcontextprotocol/sdk/types.js";
export declare const RESPONSE_CHECKER_TOOL: Tool;
export declare function findResponse(routePath: string): any;
export declare function handleCheckResponse(args: unknown): {
    content: Array<{
        type: string;
        text: string;
    }>;
};
