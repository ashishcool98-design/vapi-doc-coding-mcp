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

    // Normalize place → city only (UI behavior)
    const city = place.split(",")[0].trim();

    // 1️⃣ GEO SEARCH (same endpoint as UI)
    const geoUrl =
      `https://api.vedicastroapi.com/v3-json/utilities/geo-search` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&city=${encodeURIComponent(city)}`;

    const geoRes = await fetch(geoUrl);
    const geoJson = await geoRes.json();

    if (!geoJson?.response?.length) {
      return res.status(400).json({
        error: `Unable to resolve location for city: ${city}`
      });
    }

    const loc = geoJson.response[0];

    // ✅ Use parseFloat (NOT Number)
    const lat = parseFloat(loc.coordinates?.[0]);
    const lon = parseFloat(loc.coordinates?.[1]);
    const tz = parseFloat(loc.timezone);

    // Final safety check
    if (!isFinite(lat) || !isFinite(lon) || !isFinite(tz)) {
      return res.status(400).json({
        error: "Geo API returned non-numeric values",
        debug: {
          coordinates: loc.coordinates,
          timezone: loc.timezone
        }
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
        city,
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
