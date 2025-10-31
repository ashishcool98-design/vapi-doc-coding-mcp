# IDE and Editor Integration (MCP Clients)

This server works with any MCP-compatible client. Below are concise steps for popular editors.

## VS Code (via Continue extension)
1. Install the "Continue" extension.
2. Command Palette → "Continue: Open Config".
3. Add this under `mcpServers`:

```json
{
  "mcpServers": {
    "vedicastroapi-documentation": {
      "command": "node",
      "args": [
        "/Users/your-username/Documents/documentation-MCP/build/index.js"
      ]
    }
  }
}
```

4. Save and reload VS Code.

## Cursor
1. Settings → MCP Servers.
2. Add server:
   - Command: `node`
   - Args: `/Users/your-username/Documents/documentation-MCP/build/index.js`
3. Save and restart Cursor.

## PhpStorm (JetBrains) via Continue plugin
1. Install the "Continue" plugin.
2. Open Continue settings → Configuration.
3. Add the same `mcpServers` entry as in VS Code.
4. Apply and restart the IDE.

## Zed
1. Settings → AI → MCP Servers.
2. Add server:
   - Command: `node`
   - Args: `/Users/your-username/Documents/documentation-MCP/build/index.js`
3. Save and restart Zed.

## Neovim (via continue.nvim)
1. Install `continue.nvim` per its docs.
2. In the Continue config, add this MCP server using the same command/args.

---

## Build prerequisite
Before connecting from any editor:
```bash
cd /Users/your-username/Documents/documentation-MCP
npm install
npm run build
```
`build/index.js` should exist.

## Path reminder
Replace `/Users/your-username/...` with your actual absolute path.



