import dotenv from "dotenv";
dotenv.config();

import express from "express";
import fetch from "node-fetch";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const app = express();
app.use(express.json());

app.get("/privacy", (req, res) => {
  res.type("html").send(`
    <html>
      <head>
        <title>Privacy Policy</title>
        <meta charset="utf-8" />
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 800px; margin: 40px;">
        <h1>Privacy Policy</h1>

        <p>
          This GPT processes user-provided birth details solely to generate
          Vedic astrology insights.
        </p>

        <h2>What data is collected</h2>
        <ul>
          <li>Date of birth</li>
          <li>Time of birth</li>
          <li>Place of birth</li>
        </ul>

        <h2>Analytics</h2>
        <p>
          We collect anonymous usage analytics such as feature usage and
          country-level data to improve service quality.
          No personal birth data is stored.
        </p>

        <h2>Data storage</h2>
        <p>
          All personal input is processed in real time and discarded after
          the response is returned.
        </p>
      </body>
    </html>
  `);
});

app.post("/astro", async (req, res) => {
  const startTime = Date.now();

  try {
    const { dob, tob, place, action, div = "D1" } = req.body;

    if (!dob || !tob || !place || !action) {
      return res.status(400).json({
        error: "dob, tob, place, action are required"
      });
    }

    const allowedActions = [
      "ascendant",
      "birth_chart",
      "divisional_chart",
      "maha_dasha",
      "antar_dasha",
      "current_dasha"
    ];

    if (!allowedActions.includes(action)) {
      return res.status(400).json({
        error: `Invalid action. Allowed: ${allowedActions.join(", ")}`
      });
    }

    const city = place.split(",")[0].trim();

    const geoUrl =
      `https://api.vedicastroapi.com/v3-json/utilities/geo-search` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&city=${encodeURIComponent(city)}`;

    const geoRes = await fetch(geoUrl);
    const geoJson = await geoRes.json();

    if (!geoJson?.response?.length) {
      throw new Error("Unable to resolve location");
    }

const location = geoJson.response[0];
const lat = parseFloat(location.coordinates[0]);
const lon = parseFloat(location.coordinates[1]);
const tz = Number(location.tz);

if (Number.isNaN(lat) || Number.isNaN(lon) || Number.isNaN(tz)) {
  throw new Error("Invalid geo data returned");
}


    let endpoint = "";

    switch (action) {
      case "ascendant":
        endpoint = "horoscope/ascendant-report";
        break;
      case "birth_chart":
        endpoint = "horoscope/planet-details";
        break;
      case "divisional_chart":
        endpoint = "horoscope/divisional-charts";
        break;
      case "maha_dasha":
        endpoint = "dashas/maha-dasha";
        break;
      case "antar_dasha":
        endpoint = "dashas/antar-dasha";
        break;
      case "current_dasha":
        endpoint = "dashas/current-mahadasha";
        break;
    }

    let apiUrl =
      `https://api.vedicastroapi.com/v3-json/${endpoint}` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&dob=${encodeURIComponent(dob)}` +
      `&tob=${encodeURIComponent(tob)}` +
      `&lat=${lat}` +
      `&lon=${lon}` +
      `&tz=${tz}` +
      `&lang=en`;

    if (action === "divisional_chart") {
      apiUrl += `&div=${div}`;
    }

    const apiRes = await fetch(apiUrl);
    const apiJson = await apiRes.json();

    const responseTime = Date.now() - startTime;

    const country = place.includes(",")
      ? place.split(",").pop().trim()
      : "Unknown";

    await supabase.from("analytics").insert([
      {
        timestamp: new Date(),
        action,
        country,
        success: true,
        response_time_ms: responseTime,
        error: null
      }
    ]);

    return res.json({
      success: true,
      action,
      resolved_location: {
        name: location.full_name,
        lat,
        lon,
        tz
      },
      data: apiJson
    });

  } catch (err) {
    console.error(err);

    await supabase.from("analytics").insert([
      {
        timestamp: new Date(),
        action: req.body?.action || null,
        country: null,
        success: false,
        response_time_ms: null,
        error: err.message
      }
    ]);

    return res.status(500).json({
      error: err.message || "Internal server error"
    });
  }
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Astro API running on port ${PORT}`);
});
