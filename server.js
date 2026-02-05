import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// ====== ASTRO ENDPOINT (FINAL) ======
app.post("/astro", async (req, res) => {
  try {
    const { dob, tob, place, action } = req.body;

    if (!dob || !tob || !place || !action) {
      return res.status(400).json({
        error: "dob, tob, place, and action are required"
      });
    }

    // STEP 1: GEO SEARCH (place → lat/lon/tz)
    const geoUrl = `https://api.vedicastroapi.com/v3-json/utilities/geo-search?api_key=${process.env.VEDIC_API_KEY}&city=${encodeURIComponent(place)}`;
    const geoRes = await fetch(geoUrl);
    const geo = await geoRes.json();

    if (!geo.latitude || !geo.longitude || !geo.timezone) {
      return res.status(400).json({
        error: "Unable to resolve location"
      });
    }

    const lat = geo.latitude;
    const lon = geo.longitude;
    const tz = geo.timezone;

    // STEP 2: MAP ACTION → ASTRO ENDPOINT
    const endpointMap = {
      ascendant: "horoscope/ascendant-report",
      birth_chart: "horoscope/planet-details",
      dasha: "dashas/maha-dasha",
      divisional_chart: "horoscope/divisional-charts"
    };

    const endpoint = endpointMap[action];
    if (!endpoint) {
      return res.status(400).json({
        error: "Invalid action"
      });
    }

    // STEP 3: CALL VEDIC ASTRO API
    const astroUrl =
      `https://api.vedicastroapi.com/v3-json/${endpoint}` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&dob=${dob}` +
      `&tob=${tob}` +
      `&lat=${lat}` +
      `&lon=${lon}` +
      `&tz=${tz}` +
      `&lang=en`;

    const astroRes = await fetch(astroUrl);
    const data = await astroRes.json();

    // STEP 4: RETURN TO GPT
    res.json({
      success: true,
      action,
      data
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Astrology processing failed"
    });
  }
});

// ====== SERVER START ======
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Astro API running on port ${PORT}`);
});
