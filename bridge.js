import express from "express";
import bodyParser from "body-parser";
import { spawn } from "child_process";

console.log("🔥 MCP → HTTP Bridge Loaded");

const app = express();
app.use(bodyParser.json());

let mcp;
let buffer = "";

// ---------- MCP CALL ----------
function callMCP(method, params) {
  return new Promise((resolve, reject) => {
    const id = Date.now();

    mcp.stdin.write(
      JSON.stringify({
        jsonrpc: "2.0",
        id,
        method,
        params
      }) + "\n"
    );

    const timer = setInterval(() => {
      const lines = buffer.split("\n");
      for (const line of lines) {
        try {
          const msg = JSON.parse(line);
          if (msg.id === id) {
            buffer = buffer.replace(line + "\n", "");
            clearInterval(timer);
            if (msg.error) reject(msg.error);
            else resolve(msg.result);
            return;
          }
        } catch {}
      }
    }, 50);
  });
}

// ---------- ROUTES (GPT SAFE) ----------

// Search routes
app.post("/search-routes", async (req, res) => {
  try {
    const result = await callMCP("tools/call", {
      name: "search_routes",
      arguments: { query: req.body.query }
    });
    res.json(result);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Endpoint details
app.post("/endpoint-details", async (req, res) => {
  try {
    const result = await callMCP("tools/call", {
      name: "check_endpoint",
      arguments: { route: req.body.route }
    });
    res.json(result);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Endpoint response example
app.post("/endpoint-response", async (req, res) => {
  try {
    const result = await callMCP("tools/call", {
      name: "check_response",
      arguments: { route: req.body.route }
    });
    res.json(result);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Feature-based search
app.post("/search-features", async (req, res) => {
  try {
    const result = await callMCP("tools/call", {
      name: "search_features",
      arguments: {
        query: req.body.query,
        limit: req.body.limit || 10
      }
    });
    res.json(result);
  } catch (e) {
    res.status(500).json(e);
  }
});

// ---------- START HTTP FIRST ----------
app.listen(3333, () => {
  console.log("✅ HTTP listening on http://localhost:3333");

  mcp = spawn("node", ["build/index.js"], {
    stdio: ["pipe", "pipe", "inherit"]
  });

  mcp.stdout.on("data", (d) => (buffer += d.toString()));
});
