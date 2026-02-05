import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/astro", async (req, res) => {
  try {
    const { dob, tob, place, action } = req.body;

    if (!dob || !tob || !place || !action) {
      return res.status(400).json({
        error: "dob, tob, place and action are required"
      });
    }

    if (action !== "ascendant") {
      return res.status(400).json({
        error: "Only action='ascendant' is supported right now"
      });
    }

    // 1️⃣ GEO SEARCH ADVANCED — CORRECT FIELD NAMES
    const geoUrl =
      `https://api.vedicastroapi.com/v3-json/utilities/geo-search-advanced` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&city=${encodeURIComponent(place)}` +
      `&date=${encodeURIComponent(dob)}`;

    const geoRes = await fetch(geoUrl);
    const geoJson = await geoRes.json();

    if (!geoJson?.response?.length) {
      return res.status(400).json({
        error: `Unable to resolve location for city: ${place}`
      });
    }

    const loc = geoJson.response[0];

    // ✅ THESE ARE THE CORRECT KEYS
    const lat = Number(loc.latitude);
    const lon = Number(loc.longitude);
    const tz = Number(loc.timezone_offset);

    if ([lat, lon, tz].some(Number.isNaN)) {
      return res.status(400).json({
        error: "Geo API did not return numeric lat/lon/tz"
      });
    }

    // 2️⃣ ASCENDANT API CALL
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
        latitude: lat,
        longitude: lon,
        timezone: tz
      },
      data: astroJson
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
