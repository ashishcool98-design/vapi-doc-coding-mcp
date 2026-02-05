import express from "express";

const app = express();
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

// Main astrology endpoint
app.post("/astro", async (req, res) => {
  try {
    const { endpoint, params } = req.body;

    if (!endpoint || !params) {
      return res.status(400).json({
        error: "endpoint and params are required"
      });
    }

    const query = new URLSearchParams({
      ...params,
      api_key: process.env.VEDIC_API_KEY
    }).toString();

    const url = `https://api.vedicastroapi.com/v3-json/${endpoint}?${query}`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Render port
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Astro server running on port ${PORT}`);
});
