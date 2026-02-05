import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/astro", async (req, res) => {
  try {
    const { dob, tob, place, action } = req.body;

    if (!dob || !tob || !place || action !== "ascendant") {
      return res.status(400).json({
        error: "dob, tob, place are required and action must be 'ascendant'"
      });
    }

    // 1️⃣ GEO SEARCH — SAME AS UI
    const geoUrl =
      `https://api.vedicastroapi.com/v3-json/utilities/geo-search` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&city=${encodeURIComponent(place)}`;

    const geoRes = await fetch(geoUrl);
    const geoJson = await geoRes.json();

    if (!geoJson?.response?.length) {
      return res.status(400).json({
        error: `Unable to resolve location for city: ${place}`
      });
    }

    const loc = geoJson.response[0];

    // ✅ EXACTLY as per UI response
    const lat = Number(loc.coordinates[0]);
    const lon = Number(loc.coordinates[1]);
    const tz = Number(loc.timezone);

    if ([lat, lon, tz].some(Number.isNaN)) {
      return res.status(400).json({
        error: "Geo API did not return numeric lat/lon/tz"
      });
    }

    // 2️⃣ ASCENDANT API
    const astroUrl =
      `https://api.vedicastroapi.com/v3-json/horoscope/ascendant-report` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&dob=${encodeURIComponent(dob)}` +
      `&tob=${encodeURIComponent(tob)}` +
      `&lat=${lat}` +
      `&lon=${lon}` +
      `&tz=${tz}` +
      `&lang=en`;

    const astroRes = await fetch(astroUrl);
    const astroJson = await astroRes.json();

    res.json({
      success: true,
      input: { dob, tob, place },
      resolved_location: {
        name: loc.full_name,
        latitude: lat,
        longitude: lon,
        timezone: tz
      },
      data: astroJson
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Astro API running on port ${PORT}`);
});
