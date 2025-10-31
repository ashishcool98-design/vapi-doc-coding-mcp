import responses from "../../url_responses_by_category.cjs";
export const RESPONSE_CHECKER_TOOL = {
    name: "check_response",
    description: "Get example API response data for a specific endpoint. Shows the actual response structure, sample data, and status codes. Provide a route path (e.g., '/prediction/daily-sun') or full URL.",
    inputSchema: {
        type: "object",
        properties: {
            route: {
                type: "string",
                description: "Route path (e.g., '/prediction/daily-sun') or full URL to get response example",
            },
        },
        required: ["route"],
    },
};
function extractRoutePath(input) {
    // If it's a full URL, extract the path
    if (input.startsWith("http")) {
        try {
            const url = new URL(input);
            return url.pathname.replace("/v3-json", "");
        }
        catch {
            return input;
        }
    }
    // If it starts with /v3-json, remove it
    if (input.startsWith("/v3-json")) {
        return input.replace("/v3-json", "");
    }
    return input;
}
export function findResponse(routePath) {
    const cleanPath = extractRoutePath(routePath);
    // Split the path into category and endpoint name
    // e.g., "/prediction/daily-sun" -> category: "prediction", name: "daily-sun"
    const pathParts = cleanPath.split("/").filter(p => p);
    if (pathParts.length < 2) {
        return null;
    }
    const category = pathParts[0];
    const endpointName = pathParts.slice(1).join("-");
    // Check if category exists
    if (!(category in responses)) {
        return null;
    }
    // Check if endpoint exists in category
    const categoryData = responses[category];
    if (!(endpointName in categoryData)) {
        return null;
    }
    return categoryData[endpointName];
}
function formatResponseInfo(responseData) {
    let output = `# Response Example\n\n`;
    if (responseData.url) {
        output += `**Example URL:** ${responseData.url}\n\n`;
    }
    output += `## Response Structure\n\n`;
    output += "```json\n";
    output += JSON.stringify(responseData.response, null, 2);
    output += "\n```\n";
    return output;
}
export function handleCheckResponse(args) {
    const { route } = args;
    const responseData = findResponse(route);
    if (!responseData) {
        return {
            content: [
                {
                    type: "text",
                    text: `No response example found for route "${route}". Use search_routes to find available routes.`,
                },
            ],
        };
    }
    const formattedInfo = formatResponseInfo(responseData);
    return {
        content: [{ type: "text", text: formattedInfo }],
    };
}
