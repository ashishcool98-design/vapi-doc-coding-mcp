import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

/**
 * POST /astro
 * User input:
 * {
 *   dob: "05/11/1988",
 *   tob: "14:20",
 *   place: "Delhi",
 *   action: "ascendant" | "dasha" | "birth_chart" | "divisional_chart"
 * }
 */

app.post("/astro", async (req, res) => {
  try {
    const { dob, tob, place, action } = req.body;

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
        error: `Invalid action. Allowed: ${allowedActions.join(", ")}`
      });
    }

    // 1️⃣ GEO SEARCH ADVANCED (DATE IS REQUIRED)
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

    const location = geoJson.response[0];

    const lat = Number(location.latitude);
    const lon = Number(location.longitude);
    const tz = Number(location.timezone);

    if (
      Number.isNaN(lat) ||
      Number.isNaN(lon) ||
      Number.isNaN(tz)
    ) {
      return res.status(400).json({
        error: "Invalid geo data returned (lat/lon/tz)"
      });
    }

    // 2️⃣ Select correct astrology endpoint
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

    // 3️⃣ Call Vedic Astro API
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

    res.json({
      success: true,
      action,
      input: { dob, tob, place },
      resolved_location: {
        city: place,
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
