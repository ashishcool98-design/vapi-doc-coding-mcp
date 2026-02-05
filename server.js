import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

/**
 * POST /astro
 * Input:
 * {
 *   "dob": "20/02/1991",
 *   "tob": "06:30",
 *   "place": "Mumbai, India",
 *   "action": "ascendant"
 * }
 */

app.post("/astro", async (req, res) => {
  try {
    const { dob, tob, place, action } = req.body;

    // 1️⃣ Validate input (STRICT)
    if (!dob || !tob || !place || action !== "ascendant") {
      return res.status(400).json({
        error: "dob, tob, place are required and action must be 'ascendant'"
      });
    }

    // 2️⃣ GEO SEARCH (Utilities → Geo Search)
    const city = place.split(",")[0].trim();

    const geoUrl =
      `https://api.vedicastroapi.com/v3-json/utilities/geo-search` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&city=${encodeURIComponent(city)}`;

    const geoRes = await fetch(geoUrl);
    const geoJson = await geoRes.json();

    if (
      !geoJson ||
      !Array.isArray(geoJson.response) ||
      geoJson.response.length === 0
    ) {
      return res.status(400).json({
        error: `Unable to resolve location for city: ${place}`
      });
    }

    // ✅ USE FIRST MATCH (as per documentation & UI)
    const location = geoJson.response[0];

    // 🔥 CRITICAL FIX — PARSE STRINGS → NUMBERS
    const lat = parseFloat(location.coordinates[0]);
    const lon = parseFloat(location.coordinates[1]);
    const tz = Number(location.tz);

    if (
      Number.isNaN(lat) ||
      Number.isNaN(lon) ||
      Number.isNaN(tz)
    ) {
      return res.status(400).json({
        error: "Invalid geo data returned",
        debug: {
          coordinates: location.coordinates,
          tz: location.tz
        }
      });
    }

    // 3️⃣ HOROSCOPE → ASCENDANT REPORT (DOC-CORRECT)
    const horoscopeUrl =
      `https://api.vedicastroapi.com/v3-json/horoscope/ascendant-report` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&dob=${encodeURIComponent(dob)}` +
      `&tob=${encodeURIComponent(tob)}` +
      `&lat=${lat}` +
      `&lon=${lon}` +
      `&tz=${tz}` +
      `&lang=en`;

    const horoscopeRes = await fetch(horoscopeUrl);
    const horoscopeJson = await horoscopeRes.json();

    // 4️⃣ RETURN FINAL RESPONSE
    res.json({
      success: true,
      input: { dob, tob, place },
      resolved_location: {
        name: location.full_name,
        lat,
        lon,
        tz
      },
      data: horoscopeJson
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Internal server error"
    });
  }
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Astro API running on port ${PORT}`);
});
