import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/astro", async (req, res) => {
  try {
    const { dob, tob, place, action } = req.body;

    if (!dob || !tob || !place || !action) {
      return res.status(400).json({
        error: "dob, tob, place, and action are required"
      });
    }

    // 1️⃣ CITY ONLY (per docs)
    const city = place.split(",")[0].trim();

    let lat, lon, tz;

    // 2️⃣ GEO SEARCH (BASIC)
    const geoBasicUrl =
      `https://api.vedicastroapi.com/v3-json/utilities/geo-search` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&city=${encodeURIComponent(city)}`;

    const geoBasicRes = await fetch(geoBasicUrl);
    const geoBasic = await geoBasicRes.json();

    if (
      geoBasic?.response &&
      Array.isArray(geoBasic.response) &&
      geoBasic.response.length > 0
    ) {
      const loc = geoBasic.response[0];
      lat = loc.coordinates?.[0];
      lon = loc.coordinates?.[1];
      tz = loc.timezone;
    }

    // 3️⃣ FALLBACK: GEO SEARCH ADVANCED
    if (!lat || !lon || !tz) {
      const geoAdvUrl =
        `https://api.vedicastroapi.com/v3-json/utilities/geo-search-advanced` +
        `?api_key=${process.env.VEDIC_API_KEY}` +
        `&city=${encodeURIComponent(city)}` +
        `&date=${encodeURIComponent(dob)}`;

      const geoAdvRes = await fetch(geoAdvUrl);
      const geoAdv = await geoAdvRes.json();

      if (
        geoAdv?.response &&
        Array.isArray(geoAdv.response) &&
        geoAdv.response.length > 0
      ) {
        const loc = geoAdv.response[0];
        lat = loc.coordinates?.[0];
        lon = loc.coordinates?.[1];
        tz = loc.timezone;
      }
    }

    if (!lat || !lon || !tz) {
      return res.status(400).json({
        error: `Unable to resolve location for city: ${city}`
      });
    }

    // 4️⃣ ACTION → ENDPOINT MAP
    const actionMap = {
      ascendant: "horoscope/ascendant-report",
      birth_chart: "horoscope/planet-details",
      dasha: "dashas/maha-dasha",
      divisional_chart: "horoscope/divisional-charts"
    };

    const endpoint = actionMap[action];
    if (!endpoint) {
      return res.status(400).json({ error: "Invalid action" });
    }

    // 5️⃣ CALL ASTRO API
    const astroUrl =
      `https://api.vedicastroapi.com/v3-json/${endpoint}` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&dob=${encodeURIComponent(dob)}` +
      `&tob=${encodeURIComponent(tob)}` +
      `&lat=${lat}` +
      `&lon=${lon}` +
      `&tz=${tz}` +
      `&lang=en`;

    const astroRes = await fetch(astroUrl);
    const astroData = await astroRes.json();

    res.json({
      success: true,
      city,
      latitude: lat,
      longitude: lon,
      timezone: tz,
      action,
      data: astroData
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
