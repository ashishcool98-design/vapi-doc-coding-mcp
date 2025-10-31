# Quick Start Guide

## 🚀 Get Running in 3 Steps

### Step 1: Build
```bash
cd /Users/your-username/Documents/documentation-MCP
npm install
npm run build
```

### Step 2: Configure Claude
Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "vedicastroapi-documentation": {
      "command": "node",
      "args": ["/Users/your-username/Documents/documentation-MCP/build/index.js"]
    }
  }
}
```

### Step 3: Restart Claude
Quit and restart Claude Desktop completely. Look for 🔌 icon.

---

## 🎯 Try These Queries

### Search Routes
```
"What routes are available for daily predictions?"
"Find all matching-related endpoints"
"Show me horoscope routes"
```

### Check Parameters
```
"What parameters does /prediction/daily-sun need?"
"Show endpoint details for /matching/ashtakoot"
```

### View Responses
```
"Show me an example response for /prediction/daily-sun"
"What does /horoscope/planet-details return?"
```

---

## 📁 Modular Structure

```
src/
├── index.ts              # Main server
├── types.ts              # Shared types
└── tools/
    ├── searchRoutes.ts   # Tool 1: Route search
    ├── checkEndpoint.ts  # Tool 2: Endpoint details
    └── checkResponse.ts  # Tool 3: Response examples
```

Each tool is self-contained with:
- ✅ Tool definition (name, description, schema)
- ✅ Core business logic function
- ✅ Handler function for MCP responses

---

## 🛠️ Development

### Watch Mode
```bash
npm run watch  # Auto-rebuild on changes
```

### Test Data Loading
```bash
node test-server.cjs
```

### Verify Build
```bash
ls -la build/tools/  # Should see 3 tool files
```

---

## 📚 Documentation

- **README.md** - User guide, setup, and features
- **ARCHITECTURE.md** - Technical deep dive
- **PROJECT_SUMMARY.md** - Project overview

---

## 🔧 Troubleshooting

### Server Not Showing Up
1. Check path in config is absolute
2. Verify `build/index.js` exists
3. Check logs: `~/Library/Logs/Claude/mcp*.log`

### Build Errors
```bash
rm -rf build node_modules
npm install
npm run build
```

---

## ✨ What Makes This Special

- **Modular**: Each tool in its own file
- **Type-Safe**: Full TypeScript with strict mode
- **Fast**: All data in-memory, instant responses
- **Complete**: 129 endpoints, 11 categories
- **Documented**: 4 comprehensive documentation files
- **Tested**: Includes validation script

---

**Ready to extend?** See `ARCHITECTURE.md` for adding new tools!

