import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

/**
 * POST /astro
 * Input:
 * {
 *   "dob": "04/10/1989",
 *   "tob": "01:20",
 *   "place": "Delhi",
 *   "action": "ascendant"
 * }
 */

app.post("/astro", async (req, res) => {
  try {
    const { dob, tob, place, action } = req.body;

    // 1️⃣ Validate input
    if (!dob || !tob || !place || action !== "ascendant") {
      return res.status(400).json({
        error: "dob, tob, place are required and action must be 'ascendant'"
      });
    }

    // 2️⃣ GEO SEARCH (Utilities → Geo Search)
    const geoUrl =
      `https://api.vedicastroapi.com/v3-json/utilities/geo-search` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&city=${encodeURIComponent(place)}`;

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

    const location = geoJson.response[0];
    const lat = location.coordinates[0];
    const lon = location.coordinates[1];
    const tz = location.timezone;

    // 3️⃣ HOROSCOPE → ASCENDANT REPORT
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

    // 4️⃣ Return response
    res.json({
      success: true,
      place: location.full_name,
      latitude: lat,
      longitude: lon,
      timezone: tz,
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
