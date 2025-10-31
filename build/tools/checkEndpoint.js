import endpoints from "../../endpoints_new_copy.cjs";
export const ENDPOINT_CHECKER_TOOL = {
    name: "check_endpoint",
    description: "Get detailed endpoint information including URL, request type, and all required/optional parameters with their types, samples, and descriptions. Provide a route path (e.g., '/prediction/daily-sun') or full URL.",
    inputSchema: {
        type: "object",
        properties: {
            route: {
                type: "string",
                description: "Route path (e.g., '/prediction/daily-sun') or full URL to get endpoint details",
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
export function findEndpoint(routePath) {
    const cleanPath = extractRoutePath(routePath);
    // Try to find exact match first
    for (const endpoint of endpoints) {
        const endpointPath = extractRoutePath(endpoint.url);
        if (endpointPath === cleanPath) {
            return endpoint;
        }
    }
    // Try partial match
    for (const endpoint of endpoints) {
        const endpointPath = extractRoutePath(endpoint.url);
        if (endpointPath.includes(cleanPath) || cleanPath.includes(endpointPath)) {
            return endpoint;
        }
    }
    return null;
}
function formatEndpointInfo(endpoint) {
    let output = `# Endpoint Information\n\n`;
    output += `**URL:** ${endpoint.url}\n`;
    output += `**Method:** ${endpoint.request_type}\n\n`;
    output += `## Parameters\n\n`;
    for (const [paramName, paramInfo] of Object.entries(endpoint.params)) {
        output += `### ${paramName}\n`;
        if (paramInfo.description) {
            output += `**Description:** ${paramInfo.description}\n\n`;
        }
        if (paramInfo.datatype) {
            output += `**Type:** ${paramInfo.datatype}\n`;
        }
        if (paramInfo.template) {
            output += `**Format:** ${paramInfo.template}\n`;
        }
        if (paramInfo.sample !== undefined) {
            output += `**Sample:** ${JSON.stringify(paramInfo.sample)}\n`;
        }
        if (paramInfo.other_option) {
            if (Array.isArray(paramInfo.other_option) && paramInfo.other_option.length > 0) {
                output += `**Options:** ${JSON.stringify(paramInfo.other_option)}\n`;
            }
            else if (typeof paramInfo.other_option === 'object' && Object.keys(paramInfo.other_option).length > 0) {
                output += `**Options:**\n`;
                for (const [key, value] of Object.entries(paramInfo.other_option)) {
                    output += `  - ${key}: ${value}\n`;
                }
            }
        }
        output += `\n`;
    }
    return output;
}
export function handleCheckEndpoint(args) {
    const { route } = args;
    const endpoint = findEndpoint(route);
    if (!endpoint) {
        return {
            content: [
                {
                    type: "text",
                    text: `No endpoint found for route "${route}". Use search_routes to find available routes.`,
                },
            ],
        };
    }
    const formattedInfo = formatEndpointInfo(endpoint);
    return {
        content: [{ type: "text", text: formattedInfo }],
    };
}
