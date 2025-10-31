# Module Diagram

Visual representation of the modular MCP server architecture.

---

## 📦 File Organization

```
documentation-MCP/
│
├─── 📁 src/                          # TypeScript Source
│    ├─── 📄 index.ts                 # Main Server (79 lines)
│    ├─── 📄 types.ts                 # Shared Types (30 lines)
│    ├─── 📄 global.d.ts              # TS Declarations (36 lines)
│    │
│    └─── 📁 tools/                   # Tool Modules
│         ├─── 📄 searchRoutes.ts     # Route Search (60 lines)
│         ├─── 📄 checkEndpoint.ts    # Endpoint Details (128 lines)
│         └─── 📄 checkResponse.ts    # Response Examples (101 lines)
│
├─── 📁 build/                        # Compiled Output
│    ├─── 📄 index.js
│    ├─── 📄 types.js
│    └─── 📁 tools/
│         ├─── 📄 searchRoutes.js
│         ├─── 📄 checkEndpoint.js
│         └─── 📄 checkResponse.js
│
├─── 📊 Data Files
│    ├─── 📄 routes.cjs               # 129 routes
│    ├─── 📄 endpoints_new_copy.cjs   # Endpoint params
│    └─── 📄 url_responses_by_category.cjs  # Response examples
│
└─── 📚 Documentation
     ├─── 📄 README.md                # User guide
     ├─── 📄 SETUP.md                 # Setup instructions
     ├─── 📄 ARCHITECTURE.md          # Technical docs
     ├─── 📄 TOOLS_OVERVIEW.md        # Tool details
     ├─── 📄 QUICK_START.md           # Quick start
     ├─── 📄 PROJECT_SUMMARY.md       # Project overview
     ├─── 📄 COMPLETION_SUMMARY.md    # Completion report
     └─── 📄 MODULE_DIAGRAM.md        # This file
```

---

## 🔄 Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     Claude Desktop                          │
│                  (User makes query)                         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ JSON-RPC over stdio
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   index.ts (Main Server)                    │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  • Listen for tool requests                           │  │
│  │  • Route to appropriate handler                       │  │
│  │  • Return formatted response                          │  │
│  └───────────────────────────────────────────────────────┘  │
└───┬─────────────────────┬─────────────────────┬─────────────┘
    │                     │                     │
    │ search_routes       │ check_endpoint      │ check_response
    ▼                     ▼                     ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│searchRoutes  │    │checkEndpoint │    │checkResponse │
│   Tool       │    │   Tool       │    │   Tool       │
├──────────────┤    ├──────────────┤    ├──────────────┤
│              │    │              │    │              │
│ • Tool def   │    │ • Tool def   │    │ • Tool def   │
│ • Search     │    │ • Lookup     │    │ • Lookup     │
│ • Format     │    │ • Format     │    │ • Format     │
│ • Handle     │    │ • Handle     │    │ • Handle     │
│              │    │              │    │              │
└──────┬───────┘    └──────┬───────┘    └──────┬───────┘
       │                   │                   │
       │                   │                   │
       ▼                   ▼                   ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ routes.cjs   │    │endpoints.cjs │    │responses.cjs │
│              │    │              │    │              │
│ 129 routes   │    │ 129 endpoints│    │ 11 categories│
│              │    │ Full params  │    │ Full examples│
└──────────────┘    └──────────────┘    └──────────────┘
```

---

## 🧩 Module Dependencies

```
┌─────────────────────────────────────────────────────────┐
│                      index.ts                           │
│                   (Main Server)                         │
└───┬─────────────┬─────────────┬────────────────────────┘
    │             │             │
    │ imports     │ imports     │ imports
    │             │             │
    ▼             ▼             ▼
┌────────────┐ ┌──────────┐ ┌──────────┐
│searchRoutes│ │checkEnd  │ │checkResp │
│   .ts      │ │point.ts  │ │onse.ts   │
└────┬───────┘ └────┬─────┘ └────┬─────┘
     │              │            │
     │ imports      │ imports    │ imports
     │              │            │
     ▼              ▼            ▼
┌────────────────────────────────────┐
│          types.ts                  │
│     (Shared Type Definitions)      │
└────────────────────────────────────┘
     │              │            │
     │ uses         │ uses       │ uses
     │              │            │
     ▼              ▼            ▼
┌───────────┐ ┌──────────┐ ┌──────────┐
│routes.cjs │ │endpoints │ │responses │
│           │ │  .cjs    │ │  .cjs    │
└───────────┘ └──────────┘ └──────────┘
```

**Key Points:**
- No circular dependencies
- Each tool is independent
- Shared types prevent duplication
- Data files only loaded once

---

## 🎯 Tool Structure (Consistent Pattern)

Each tool file follows this structure:

```typescript
┌─────────────────────────────────────────┐
│         Tool File Structure             │
├─────────────────────────────────────────┤
│                                         │
│  1. IMPORTS                             │
│     • MCP SDK types                     │
│     • Data files                        │
│     • Shared types                      │
│                                         │
│  2. TOOL DEFINITION                     │
│     export const TOOL_NAME: Tool        │
│     • name                              │
│     • description                       │
│     • inputSchema                       │
│                                         │
│  3. HELPER FUNCTIONS (private)          │
│     function helperFunction()           │
│     • Internal utilities                │
│     • Not exported                      │
│                                         │
│  4. CORE LOGIC (exported)               │
│     export function coreFunction()      │
│     • Business logic                    │
│     • Testable independently            │
│                                         │
│  5. MCP HANDLER (exported)              │
│     export function handleTool()        │
│     • Parse arguments                   │
│     • Call core function                │
│     • Format response                   │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📊 Size Comparison

### Source Files (TypeScript)
```
┌─────────────────────┬───────┬────────────┐
│ File                │ Lines │ Purpose    │
├─────────────────────┼───────┼────────────┤
│ index.ts            │   79  │ Server     │
│ types.ts            │   30  │ Types      │
│ global.d.ts         │   36  │ Declares   │
│ searchRoutes.ts     │   60  │ Tool #1    │
│ checkEndpoint.ts    │  128  │ Tool #2    │
│ checkResponse.ts    │  101  │ Tool #3    │
├─────────────────────┼───────┼────────────┤
│ TOTAL               │  434  │            │
└─────────────────────┴───────┴────────────┘
```

### Data Files (CommonJS)
```
┌──────────────────────────┬────────┬─────────────┐
│ File                     │ Lines  │ Content     │
├──────────────────────────┼────────┼─────────────┤
│ routes.cjs               │    134 │ Route list  │
│ endpoints_new_copy.cjs   │ 10,603 │ Params      │
│ url_responses_by_c...cjs │ 18,884 │ Examples    │
├──────────────────────────┼────────┼─────────────┤
│ TOTAL                    │ 29,621 │             │
└──────────────────────────┴────────┴─────────────┘
```

---

## 🔀 Request Flow Example

### Example: "What parameters does /prediction/daily-sun need?"

```
1. User Query (Claude Desktop)
   "What parameters does /prediction/daily-sun need?"
        ↓
2. Claude decides to use check_endpoint tool
   tool: "check_endpoint"
   args: { route: "/prediction/daily-sun" }
        ↓
3. Server receives request (index.ts)
   CallToolRequestSchema handler
        ↓
4. Routes to tool handler
   handleCheckEndpoint(args)
        ↓
5. Tool extracts path and searches
   findEndpoint("/prediction/daily-sun")
        ↓
6. Finds matching endpoint in endpoints.cjs
   { url: "...", params: {...} }
        ↓
7. Formats parameter details
   formatEndpointInfo(endpoint)
        ↓
8. Returns markdown response
   {
     content: [{
       type: "text",
       text: "# Endpoint Information\n\n..."
     }]
   }
        ↓
9. Claude receives and displays to user
   Shows formatted parameter list
```

---

## 🧪 Testing Flow

```
npm run build
     ↓
TypeScript Compiler (tsc)
     ↓
Reads: tsconfig.json
Reads: src/**/*.ts
Reads: global.d.ts (for .cjs types)
     ↓
Compiles to build/
     ↓
┌────────────────────────┐
│ build/                 │
│ ├── index.js           │
│ ├── types.js           │
│ └── tools/             │
│     ├── searchRoutes   │
│     ├── checkEndpoint  │
│     └── checkResponse  │
└────────────────────────┘
     ↓
node test-server.cjs
     ↓
Tests:
✓ Routes load (129)
✓ Endpoints load (129)
✓ Responses load (11 categories)
     ↓
✅ Ready for Claude Desktop
```

---

## 💡 Extension Example

### Adding a 4th Tool: Parameter Validator

```
1. Create file:
   src/tools/validateParams.ts

2. Implement:
   ┌────────────────────────────┐
   │ VALIDATE_PARAMS_TOOL       │
   │ validateParameters()       │
   │ handleValidateParams()     │
   └────────────────────────────┘

3. Register in index.ts:
   import { VALIDATE_PARAMS_TOOL, handleValidateParams }
   
   Add to tools array
   Add to request handler

4. Build:
   npm run build

5. Result:
   build/tools/validateParams.js
```

**No changes needed to existing tools!**

---

## 🎨 Visual Module Map

```
                    MCP Server
                        │
        ┌───────────────┼───────────────┐
        │               │               │
   Tool Module 1   Tool Module 2   Tool Module 3
        │               │               │
   searchRoutes    checkEndpoint   checkResponse
        │               │               │
    ┌───┴───┐       ┌───┴───┐       ┌───┴───┐
    │       │       │       │       │       │
 routes  types  endpoints types  responses types
  .cjs    .ts     .cjs    .ts     .cjs    .ts
```

**Benefits:**
- ✅ Independent modules
- ✅ Shared types
- ✅ No coupling between tools
- ✅ Easy to test individually
- ✅ Clear dependencies

---

## 📈 Complexity Management

### Before Refactoring
```
┌─────────────────────────────────┐
│   Single File (362 lines)       │
│                                 │
│  Everything mixed together:     │
│  • Server setup                 │
│  • Tool definitions             │
│  • Helper functions             │
│  • Handlers                     │
│  • Type definitions             │
│                                 │
│  Complexity: HIGH               │
└─────────────────────────────────┘
```

### After Refactoring
```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ Server      │  │ Types       │  │ Tool 1      │
│ (79 lines)  │  │ (30 lines)  │  │ (60 lines)  │
│             │  │             │  │             │
│ Setup       │  │ Interfaces  │  │ Search      │
│ Routing     │  │ Types       │  │ Logic       │
└─────────────┘  └─────────────┘  └─────────────┘

┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ Tool 2      │  │ Tool 3      │  │ Declarations│
│ (128 lines) │  │ (101 lines) │  │ (36 lines)  │
│             │  │             │  │             │
│ Endpoint    │  │ Response    │  │ .cjs types  │
│ Logic       │  │ Logic       │  │             │
└─────────────┘  └─────────────┘  └─────────────┘

Complexity per file: LOW
Total organization: EXCELLENT
```

---

## 🎯 Summary

### Modular Benefits Achieved

✅ **Separation**: Each tool in its own file  
✅ **Independence**: Tools don't affect each other  
✅ **Clarity**: Clear file organization  
✅ **Maintainability**: Easy to find and modify code  
✅ **Extensibility**: Simple to add new tools  
✅ **Testability**: Each module testable independently  
✅ **Scalability**: Can grow to many tools  

### Architecture Principles

✅ **Single Responsibility**: Each file has one job  
✅ **DRY**: Shared types prevent duplication  
✅ **Modularity**: Clear module boundaries  
✅ **Type Safety**: TypeScript throughout  
✅ **Consistency**: Same pattern everywhere  

---

**The modular structure makes this MCP server:**
- Easy to understand
- Simple to maintain
- Ready to extend
- Professional quality

