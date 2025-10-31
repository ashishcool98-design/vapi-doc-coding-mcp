# MCP Tools Overview

This document provides a detailed look at each tool implementation.

---

## Tool 1: Route Searcher (`searchRoutes.ts`)

**File**: `src/tools/searchRoutes.ts`  
**Lines**: ~60  
**Purpose**: Search through 129 API routes by keyword

### Tool Definition
```typescript
{
  name: "search_routes",
  description: "Search for API routes in the Vedic Astro API...",
  inputSchema: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "Search query to find matching routes"
      }
    },
    required: ["query"]
  }
}
```

### Exports
1. **`ROUTE_SEARCHER_TOOL`** - MCP tool definition
2. **`searchRoutes(query: string): string[]`** - Core search logic
3. **`handleSearchRoutes(args: unknown)`** - MCP handler

### Logic Flow
```
User Query
    ↓
Convert to lowercase
    ↓
Filter routes array
    ↓
Format as markdown list
    ↓
Return to Claude
```

### Example Usage
```
Input: "daily"
Output: 7 routes including:
  - /prediction/daily-sun
  - /prediction/daily-moon
  - /prediction/daily-nakshatra
```

### Features
- Case-insensitive search
- Substring matching
- Empty query returns all routes
- Clear "no results" messaging

---

## Tool 2: Endpoint Checker (`checkEndpoint.ts`)

**File**: `src/tools/checkEndpoint.ts`  
**Lines**: ~128  
**Purpose**: Get detailed parameter information for any endpoint

### Tool Definition
```typescript
{
  name: "check_endpoint",
  description: "Get detailed endpoint information...",
  inputSchema: {
    type: "object",
    properties: {
      route: {
        type: "string",
        description: "Route path or full URL"
      }
    },
    required: ["route"]
  }
}
```

### Exports
1. **`ENDPOINT_CHECKER_TOOL`** - MCP tool definition
2. **`findEndpoint(routePath: string): Endpoint | null`** - Lookup logic
3. **`handleCheckEndpoint(args: unknown)`** - MCP handler

### Helper Functions
- **`extractRoutePath(input: string)`** - Parse URL or path
- **`formatEndpointInfo(endpoint: Endpoint)`** - Format to markdown

### Logic Flow
```
URL or Path
    ↓
Extract clean path
    ↓
Try exact match
    ↓
Try partial match
    ↓
Format parameters
    ↓
Return markdown
```

### Output Format
```markdown
# Endpoint Information

**URL:** https://api.vedicastroapi.com/v3-json/prediction/daily-sun
**Method:** GET

## Parameters

### api_key
**Description:** A unique identifier provided to you...
**Type:** string
**Sample:** "YOUR_API_KEY"

### date
**Type:** string
**Format:** DD/MM/YYYY
**Sample:** "25/05/2025"

### zodiac
**Sample:** 1
**Options:**
  - Aries: 1
  - Taurus: 2
  ... (12 zodiac signs)
```

### Features
- Accepts both URLs and paths
- Handles /v3-json prefix
- Shows all parameter details
- Displays enums/options clearly
- Helpful error messages

---

## Tool 3: Response Checker (`checkResponse.ts`)

**File**: `src/tools/checkResponse.ts`  
**Lines**: ~101  
**Purpose**: Show example API responses with sample data

### Tool Definition
```typescript
{
  name: "check_response",
  description: "Get example API response data...",
  inputSchema: {
    type: "object",
    properties: {
      route: {
        type: "string",
        description: "Route path or full URL"
      }
    },
    required: ["route"]
  }
}
```

### Exports
1. **`RESPONSE_CHECKER_TOOL`** - MCP tool definition
2. **`findResponse(routePath: string): any`** - Lookup logic
3. **`handleCheckResponse(args: unknown)`** - MCP handler

### Helper Functions
- **`extractRoutePath(input: string)`** - Parse URL or path
- **`formatResponseInfo(responseData: any)`** - Format to markdown

### Logic Flow
```
URL or Path
    ↓
Extract clean path
    ↓
Split into category/name
    ↓
Lookup in nested object
    ↓
Format as JSON
    ↓
Return markdown
```

### Output Format
```markdown
# Response Example

**Example URL:** https://api.vedicastroapi.com/v3-json/prediction/daily-sun?...

## Response Structure

```json
{
  "status": 200,
  "response": {
    "lucky_color": "white",
    "lucky_color_code": "#FFFFFF",
    "lucky_number": [25, 4],
    "bot_response": {
      "physique": {
        "score": 60,
        "split_response": "..."
      },
      ...
    },
    "zodiac": "Aries"
  },
  "remaining_api_calls": 393677
}
```
```

### Data Organization
Responses organized as:
```
{
  category: {
    "endpoint-name": {
      url: "...",
      response: { ... }
    }
  }
}
```

Example: `responses.prediction['daily-sun']`

### Features
- Accepts both URLs and paths
- Shows complete response structure
- Includes example URL with params
- Pretty-printed JSON
- All 129 endpoints covered

---

## Shared Components

### Type Definitions (`types.ts`)

```typescript
export interface EndpointParam {
  sample?: any;
  datatype?: string;
  template?: string;
  other_option?: any;
  description?: string;
}

export interface Endpoint {
  url: string;
  request_type: string;
  params: Record<string, EndpointParam>;
}

export interface ResponseData {
  url: string;
  response: any;
}

// Tool argument types
export interface RouteSearchArgs { query: string; }
export interface EndpointCheckArgs { route: string; }
export interface ResponseCheckArgs { route: string; }
```

### Global Declarations (`global.d.ts`)

Provides TypeScript types for CommonJS data files:
```typescript
declare module "*routes.cjs" {
  const routes: string[];
  export default routes;
}

declare module "*endpoints_new_copy.cjs" { ... }
declare module "*url_responses_by_category.cjs" { ... }
```

---

## Tool Design Patterns

### Consistent Structure
Each tool file follows the same pattern:
1. Imports (MCP types, data files, shared types)
2. Tool definition constant
3. Helper functions (private to the tool)
4. Core business logic function (exported)
5. MCP handler function (exported)

### Separation of Concerns
- **Tool Definition**: What the tool does (for Claude)
- **Core Function**: How it works (business logic)
- **Handler**: Integration with MCP protocol

### Example Pattern
```typescript
// 1. Tool Definition
export const MY_TOOL: Tool = { ... };

// 2. Helper Functions (optional)
function helperFunction() { ... }

// 3. Core Logic
export function coreFunction(input: string): Result {
  // Business logic here
  return result;
}

// 4. MCP Handler
export function handleMyTool(args: unknown): MCPResponse {
  const { input } = args as MyArgs;
  const result = coreFunction(input);
  return formatResponse(result);
}
```

---

## Data Sources

### `routes.cjs` (129 routes)
Simple array of route paths:
```javascript
module.exports = [
  '/prediction/daily-sun',
  '/prediction/daily-moon',
  // ... 127 more
];
```

**Used by**: `searchRoutes.ts`

### `endpoints_new_copy.cjs` (10,603 lines)
Array of endpoint objects with full parameter details:
```javascript
module.exports = [
  {
    url: "https://api.vedicastroapi.com/v3-json/prediction/daily-sun",
    request_type: "GET",
    params: {
      api_key: { sample: "...", datatype: "string", ... },
      date: { sample: "25/05/2025", template: "DD/MM/YYYY", ... },
      // ... all parameters
    }
  },
  // ... 128 more endpoints
];
```

**Used by**: `checkEndpoint.ts`

### `url_responses_by_category.cjs` (18,884 lines)
Nested object with response examples:
```javascript
module.exports = {
  prediction: {
    "daily-sun": {
      url: "https://...",
      response: { status: 200, response: { ... } }
    },
    "daily-moon": { ... },
    // ... more prediction endpoints
  },
  horoscope: { ... },
  matching: { ... },
  // ... 11 categories total
};
```

**Used by**: `checkResponse.ts`

---

## Testing Each Tool

### Test searchRoutes
```javascript
const { searchRoutes } = require('./build/tools/searchRoutes.js');
console.log(searchRoutes('daily'));
// Expected: Array of 7 daily routes
```

### Test findEndpoint
```javascript
const { findEndpoint } = require('./build/tools/checkEndpoint.js');
console.log(findEndpoint('/prediction/daily-sun'));
// Expected: Endpoint object with params
```

### Test findResponse
```javascript
const { findResponse } = require('./build/tools/checkResponse.js');
console.log(findResponse('/prediction/daily-sun'));
// Expected: Response object with example data
```

---

## Extension Guide

### Adding a New Tool

1. **Create tool file** (`src/tools/myNewTool.ts`):
```typescript
import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const MY_NEW_TOOL: Tool = {
  name: "my_new_tool",
  description: "What this tool does...",
  inputSchema: {
    type: "object",
    properties: {
      input: { type: "string", description: "..." }
    },
    required: ["input"]
  }
};

export function myNewFunction(input: string): Result {
  // Your logic here
}

export function handleMyNewTool(args: unknown) {
  // Handle and format response
}
```

2. **Register in main server** (`src/index.ts`):
```typescript
import { MY_NEW_TOOL, handleMyNewTool } from "./tools/myNewTool.js";

// Add to tools list
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [..., MY_NEW_TOOL],
  };
});

// Add handler case
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  ...
  if (name === "my_new_tool") {
    return handleMyNewTool(args);
  }
  ...
});
```

3. **Rebuild**:
```bash
npm run build
```

That's it! Your new tool is ready to use.

---

## Performance Characteristics

### Memory Usage
- **Routes**: ~2KB (129 strings)
- **Endpoints**: ~400KB (detailed parameters)
- **Responses**: ~2MB (full example responses)
- **Total**: ~2.5MB loaded at startup

### Speed
- **Route Search**: O(n) linear search, ~1ms for 129 items
- **Endpoint Lookup**: O(n) worst case, typically <1ms
- **Response Lookup**: O(1) hash lookup, <1ms

### Scalability
Current implementation works well for ~100-200 endpoints. For thousands of endpoints, consider:
- Building search index
- Using Map/Set for lookups
- Lazy loading response data

---

## Summary

✅ **3 Tools**: Each in its own modular file  
✅ **Shared Types**: Single source of truth in `types.ts`  
✅ **Consistent Pattern**: Same structure across all tools  
✅ **Type Safe**: Full TypeScript with strict checking  
✅ **Well Documented**: Clear exports and comments  
✅ **Easy to Extend**: Add new tools without touching existing code  
✅ **Tested**: All data loads successfully  

**Total Source Code**: 440 lines of TypeScript  
**Build Output**: Clean, organized JavaScript modules  
**Documentation**: Comprehensive coverage

