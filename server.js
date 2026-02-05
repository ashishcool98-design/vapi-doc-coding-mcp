import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

/**
 * POST /astro
 * Input (from GPT):
 * {
 *   dob: "04/10/1989",
 *   tob: "01:20",
 *   place: "Mumbai, India",
 *   action: "ascendant"
 * }
 */
app.post("/astro", async (req, res) => {
  try {
    const { dob, tob, place, action } = req.body;

    // ✅ REQUIRED FIELDS CHECK
    if (!dob || !tob || !place || !action) {
      return res.status(400).json({
        error: "dob, tob, place, and action are required"
      });
    }

    // ✅ DOC RULE: CITY ONLY (no country/state)
    const city = place.split(",")[0].trim();

    // ===============================
    // STEP 1: GEO SEARCH (DOC STRICT)
    // ===============================
    const geoUrl =
      `https://api.vedicastroapi.com/v3-json/utilities/geo-search` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&city=${encodeURIComponent(city)}`;

    const geoRes = await fetch(geoUrl);
    const geo = await geoRes.json();

    if (!geo.latitude || !geo.longitude || !geo.timezone) {
      return res.status(400).json({
        error: `Unable to resolve location for city: ${city}`
      });
    }

    const lat = geo.latitude;
    const lon = geo.longitude;
    const tz = geo.timezone;

    // ===============================
    // STEP 2: ACTION → ENDPOINT MAP
    // ===============================
    const actionMap = {
      ascendant: "horoscope/ascendant-report",
      birth_chart: "horoscope/planet-details",
      dasha: "dashas/maha-dasha",
      divisional_chart: "horoscope/divisional-charts"
    };

    const endpoint = actionMap[action];
    if (!endpoint) {
      return res.status(400).json({
        error: "Invalid action"
      });
    }

    // ===============================
    // STEP 3: ASTROLOGY API CALL
    // ===============================
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

    // ===============================
    // STEP 4: RETURN TO GPT
    // ===============================
    res.json({
      success: true,
      city,
      lat,
      lon,
      tz,
      action,
      data: astroData
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Internal server error"
    });
  }
});

// SERVER START
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Astro API running on port ${PORT}`);
});
