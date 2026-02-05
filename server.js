import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

/**
 * POST /astro
 * Input:
 * {
 *   "dob": "05/11/1988",
 *   "tob": "14:20",
 *   "place": "Delhi",
 *   "action": "ascendant" | "dasha" | "birth_chart" | "divisional_chart"
 * }
 */

app.post("/astro", async (req, res) => {
  try {
    const { dob, tob, place, action } = req.body;

    // 1️⃣ Basic validation
    if (!dob || !tob || !place || !action) {
      return res.status(400).json({
        error: "dob, tob, place and action are required"
      });
    }

    const allowedActions = [
      "ascendant",
      "dasha",
      "birth_chart",
      "divisional_chart"
    ];

    if (!allowedActions.includes(action)) {
      return res.status(400).json({
        error: `Invalid action. Allowed actions: ${allowedActions.join(", ")}`
      });
    }

    // 2️⃣ GEO SEARCH (Utilities → Geo Search)
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

    const location = geoJson.response[0];
    const lat = location.coordinates[0];
    const lon = location.coordinates[1];
    let tz = location.timezone;

    // 3️⃣ Ensure numeric timezone (STRICT requirement)
    if (typeof tz !== "number") {
      const tzFallbackMap = {
        "Asia/Kolkata": 5.5,
        "Europe/London": 0,
        "America/New_York": -5,
        "America/Los_Angeles": -8,
        "America/Chicago": -6,
        "Europe/Paris": 1
      };
      tz = tzFallbackMap[location.timezone];
    }

    if (typeof tz !== "number") {
      return res.status(400).json({
        error: "Unable to determine numeric timezone (tz)"
      });
    }

    // 4️⃣ Select correct Vedic Astro endpoint
    let endpoint = "";

    switch (action) {
      case "ascendant":
        endpoint = "/horoscope/ascendant-report";
        break;

      case "dasha":
        endpoint = "/dashas/maha-dasha";
        break;

      case "birth_chart":
        endpoint = "/horoscope/planet-details";
        break;

      case "divisional_chart":
        endpoint = "/horoscope/divisional-charts";
        break;
    }

    // 5️⃣ Call Vedic Astro API
    const apiUrl =
      `https://api.vedicastroapi.com/v3-json${endpoint}` +
      `?api_key=${process.env.VEDIC_API_KEY}` +
      `&dob=${encodeURIComponent(dob)}` +
      `&tob=${encodeURIComponent(tob)}` +
      `&lat=${lat}` +
      `&lon=${lon}` +
      `&tz=${tz}` +
      `&lang=en`;

    const apiRes = await fetch(apiUrl);
    const apiJson = await apiRes.json();

    // 6️⃣ Return unified response
    res.json({
      success: true,
      action,
      input: {
        dob,
        tob,
        place
      },
      resolved_location: {
        name: location.full_name,
        latitude: lat,
        longitude: lon,
        timezone: tz
      },
      data: apiJson
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
