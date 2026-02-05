import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

/*
 POST /astro
 Input from GPT:
 {
   "dob": "04/10/1989",
   "tob": "01:20",
   "place": "New York, USA",
   "action": "dasha"
 }
*/

app.post("/astro", async (req, res) => {
  try {
    const { dob, tob, place, action } = req.body;

    // ===============================
    // 1️⃣ BASIC VALIDATION
    // ===============================
    if (!dob || !tob || !place || !action) {
      return res.status(400).json({
        error: "dob, tob, place, and action are required"
      });
    }

    // ===============================
    // 2️⃣ CITY NORMALIZATION (DOC RULE)
    // ===============================
    // "New York, USA" → "New York"
    const city = place.split(",")[0].trim();

    let lat, lon, tz;

    // ===============================
    // 3️⃣ GEO SEARCH (DOC STRICT)
    // ===============================

    // ---- Try BASIC geo-search first
    const geoBasicUrl =
      `https://api.vedicastroapi.com/v3-json/utilities/geo-search` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&city=${encodeURIComponent(city)}`;

    const geoBasicRes = await fetch(geoBasicUrl);
    const geoBasic = await geoBasicRes.json();

    if (geoBasic?.latitude && geoBasic?.longitude && geoBasic?.timezone) {
      lat = geoBasic.latitude;
      lon = geoBasic.longitude;
      tz = geoBasic.timezone;
    } else {
      // ---- Fallback: ADVANCED geo-search (REQUIRED FOR INTERNATIONAL CITIES)
      const geoAdvancedUrl =
        `https://api.vedicastroapi.com/v3-json/utilities/geo-search-advanced` +
        `?api_key=${process.env.VEDIC_API_KEY}` +
        `&city=${encodeURIComponent(city)}` +
        `&date=${encodeURIComponent(dob)}`;

      const geoAdvRes = await fetch(geoAdvancedUrl);
      const geoAdv = await geoAdvRes.json();

      if (!geoAdv?.latitude || !geoAdv?.longitude || !geoAdv?.timezone) {
        return res.status(400).json({
          error: `Unable to resolve location for city: ${city}`
        });
      }

      lat = geoAdv.latitude;
      lon = geoAdv.longitude;
      tz = geoAdv.timezone;
    }

    // ===============================
    // 4️⃣ ACTION → API ENDPOINT MAP
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
    // 5️⃣ CALL VEDIC ASTRO API (DOC STRICT)
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
    // 6️⃣ RETURN RESPONSE TO GPT
    // ===============================
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
    res.status(500).json({
      error: "Internal server error"
    });
  }
});

// ===============================
// 7️⃣ START SERVER
// ===============================
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Astro API running on port ${PORT}`);
});
