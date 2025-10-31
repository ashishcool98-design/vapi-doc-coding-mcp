module.exports = {
  "/prediction/daily-sun": "Returns daily Sun-sign based horoscope for a given date and zodiac (1–12). Response includes lucky_color, lucky_color_code, lucky_number, and a bot_response object with category-wise scores and texts (physique, status, finances, relationship, career, travel, family, friends, health, total_score). Params: date (DD/MM/YYYY), zodiac (1–12), split (boolean to get split_response texts), type ('big'|'small'), lang (multiple locales)."
  ,
  "/prediction/daily-moon": "Returns daily Moon-sign based horoscope. Response includes lucky_color, lucky_color_code, lucky_number, and a bot_response object with category-wise insights and scores: physique, status, finances, relationship, career, travel, family, friends, health, total_score. Each category provides an overall score and an advisory text (split_response) describing expected influences for the day. Also includes zodiac label."
  ,
  "/prediction/daily-nakshatra": "Returns daily Nakshatra-based horoscope. Response includes lucky_color, lucky_color_code, lucky_number, and a bot_response object with category-wise guidance and scores: physique, status, finances, relationship, career, travel, family, friends, health, total_score. Each contains a score and an advisory text (split_response) summarizing the day’s influence. Includes the nakshatra label."
  ,
  "/prediction/weekly-sun": "Returns weekly Sun-sign horoscope. Response includes lucky_color, lucky_color_code, lucky_number, week_number, and a bot_response object summarizing the week across categories: status, finances, relationship, career, travel, family, friends, health, total_score — each with a score and advisory text (split_response). Includes zodiac label."
  ,
  "/prediction/weekly-moon": "Returns weekly Moon-sign horoscope. Response includes lucky_color, lucky_color_code, lucky_number, week_number, and a bot_response object summarizing the week across categories: status, finances, relationship, career, travel, family, friends, health, total_score — each with a score and advisory text (split_response). Includes zodiac label."
  ,
  "/prediction/yearly": "Returns yearly horoscope split into multiple phases (e.g., quarters). Each phase includes an overall score plus detailed sections per category (physique, health, relationship, career, travel, family, friends, finances, status), each with a score and a long-form prediction text explaining trends and guidance for that period, along with period labels."
  ,
  "/prediction/day-number": "Returns numerology Personal Day reading. Response includes title, category, number, master (whether a master number), meaning (interpretation), and description (what the number represents about today)."
  ,
  "/prediction/numerology": "Returns comprehensive numerology profile based on name and date. Response is an object keyed by aspects like destiny, personality, attitude, character, soul, agenda, purpose, each containing title, category, number, master (is master number), meaning (interpretation), and description (what that aspect signifies)."
  ,
  "/tarot/shuffle": "Returns an array of randomly shuffled tarot cards with id, index, direction (upright/reversed), name, card_image variants (classic, artwork, dark, ghibli), and card_images_back variants for deck backs."
  ,
  "/tarot/yes-no": "Returns a yes/no interpretation for a specific card and direction. Response includes card id, name, images, direction, meaning (Yes/No/Maybe), and a descriptive explanation."
  ,
  "/tarot/career-select": "Returns career-focused guidance for a card. Response includes descriptive guidance text, suggested careerPaths array, plus card id/name, images, and direction."
  ,
  "/tarot/love-triangle": "Returns relationship insights for self and two partners. Response has self, lover1, lover2 objects with description, traits[], and card id/name/images, plus deck back images."
  ,
  "/tarot/daily": "Returns daily tarot guidance split by domains: health, relationship, career, finance. Includes card id/name and images."
  ,
  "/tarot/in-depth-love": "Returns an in-depth love reading description for the selected card, with card id/name and images."
  ,
  "/tarot/erotic-love": "Returns sensual/erotic guidance description for the selected card, with card id/name and images."
  ,
  "/tarot/made-for-each-other-or-not": "Returns compatibility-style description indicating if a pair is made for each other, with card id/name and images."
  ,
  "/tarot/flirt-reading": "Returns playful flirting guidance description for the selected card, with card id/name and images."
  ,
  "/tarot/romantic-breakup": "Returns breakup analysis with cause and advise objects (each with description and card info), plus deck back images."
  ,
  "/tarot/business-breakup": "Returns business breakup analysis with cause and advise objects (each with description and card info), plus deck back images."
  ,
  "/tarot/fortune-cookie": "Returns a short fortune string message."
  ,
  "/matching/ashtakoot": "Returns Ashtakoot matching summary with kootas: tara, gana, yoni, bhakoot, grahamaitri, vasya, nadi, varna — each includes pair values, score, description, name, full_score; plus total score and bot_response summary."
  ,
  "/matching/ashtakoot-with-astro-details": "As Ashtakoot plus detailed planetary data for boy and girl (positions, degrees, houses, nakshatra, retro/combust flags, status), alongside koota scores and overall score with bot_response."
  ,
  "/matching/bulk-north-match": "Returns array of Ashtakoot-style match results for multiple candidates. Each item has koota sections (tara, gana, yoni, bhakoot, grahamaitri, vasya, nadi, varna) with pair values, scores, descriptions, plus total score, bot_response, and profile_id."
  ,
  "/matching/bulk-south-match": "Returns array of South Indian matching kootas per candidate (e.g., dina, gana, mahendra, sthree, yoni, rasi, rashiadhipati, rajju, vedha, vasya, etc.), each with pair/star values, score, description, name, full_score; includes total scoring fields where applicable."
  ,
  "/matching/bulk-west-match": "Returns status and response string; on invalid params shows error text like 'Invalid parameter - boysign or girlsign'."
  ,
  "/prediction/biorhythm": "Returns biorhythm scores and trends for physical, emotional, intellectual, and average cycles. Each includes a numeric score and trend (Benefic/Malefic)."
  ,
  "/matching/aggregate-match": "Aggregated compatibility summary: ashtakoot_score, dashkoot_score, boolean flags for rajjudosh/vedhadosh, mangaldosh text and points, pitradosh/kaalsarp flags with per-person points, overall score (0–100), extended_response narrative, and bot_response summary."
  ,
  "/matching/papasamaya-match": "Papasamaya score breakdown: boy_papa and girl_papa components (rahu_papa, sun_papa, saturn_papa, mars_papa), totals, overall score, and bot_response indicating favorability."
  ,
  "/matching/nakshatra-match": "South-style nakshatra matching with sections: dina, gana, mahendra, sthree, yoni, rasi, rasiathi (Rasi Adhipathi), vasya, rajju, vedha — each with pair/star values, score, description, name, full_score; includes total score and bot_response."
  ,
  "/matching/rajju-vedha-details": "Simple boolean flags for is_rajju_dosha_present and is_vedha_dosha_present."
  ,
  "/matching/western-match": "Western zodiac compatibility: boy_sign, girl_sign, score (percent), total (scale), bot_response summary text."
  ,
  "/dashas/antar-dasha": "Lists antardasha sequences per mahadasha: antardashas (arrays of '<Major>/<Minor>') and antardasha_order arrays of dates for each sequence."
  ,
  "/dashas/paryantar-dasha": "Lists paryantardasha (sub-sub periods) as nested arrays like 'Su/Mo/Me' grouped under each major/minor, capturing exhaustive sequences."
  ,
  "/dashas/current-mahadasha": "Shows current stacked dasha levels with names, start/end, and keys: mahadasha, antardasha, paryantardasha, Shookshamadasha, Pranadasha; includes order_names and order_of_dashas breakdown."
  ,
  "/dashas/current-mahadasha-full": "Full timeline arrays for upcoming mahadasha periods with name, start, end, key for each major dasha over life span."
  ,
  "/dashas/char-dasha-current": "Current Jaimini Char Dasha snapshot: main_dasha and its lord, sub_dasha_list, start date, and sub_dasha_end_dates."
  ,
  "/dashas/char-dasha-main": "Jaimini Char Dasha main sequence: ordered dasha_list of signs with global start_date and corresponding dasha_end_dates."
  ,
  "/dashas/char-dasha-sub": "Per-main Char Dasha breakdown array; each item includes main_dasha, main_dasha_lord, sub_dasha_list, sub_dasha_start_date, sub_dasha_end_dates."
  ,
  "/dashas/yogini-dasha-main": "Yogini Dasha main cycle: repeating dasha_list, corresponding dasha_end_dates, dasha_lord_list, and cycle start_date."
  ,
  "/dashas/yogini-dasha-sub": "Array of Yogini sub-dasha schedules with main_dasha, main_dasha_lord, sub_dasha_list, sub_dasha_start_date, sub_dasha_end_dates."
  ,
  "/dashas/specific-sub-dasha": "Dasha's upto 5 levels,  pranadasha schedule for a specified stack (md/ad/pd/sd): array of minute-level name/start/end slices, with selected mahadasha/antardasha/paryantardasha/Shookshamadasha labels. If no dasha parameters are provided, it returns mahadasha details; if only mahadasha is provided, it returns that planet's antardasha; if both mahadasha and antardasha are provided, it returns paryantardasha; and so on down the stack."
  ,
  "/extended-horoscope/find-moon-sign": "Returns moon_sign, a short prediction text, and a bot_response summarizing the sign found."
  ,
  "/extended-horoscope/find-sun-sign": "Returns sun_sign, a short prediction text, and a bot_response summarizing the sign found."
  ,
  "/extended-horoscope/find-ascendant": "Returns ascendant, a short prediction text, and a bot_response summarizing the ascendant."
  ,
  "/extended-horoscope/current-sade-sati": "Shows current Saturn period type and context: date_considered, shani_period_type, description, saturn_retrograde, age, and remedial suggestions array."
  ,
  "/extended-horoscope/extended-kundli-details": "Compact natal attributes: gana, yoni, vasya, nadi, varna, paya, tatva, stones (life/lucky/fortune), name_start, ascendant/rasi/nakshatra with lords and pada, sun_sign, tithi/karana/yoga."
  ,
  "/extended-horoscope/gem-suggestion": "Detailed gem recommendation: name/gem/key, planet, description, good_results[], diseases_cure[], wearing guidance (finger, weight, day, metal), substitutes[], not_to_wear_with[], flaw_results[], time_to_wear fields, methods, mantra."
  ,
  "/extended-horoscope/numero-table": "Numerology table: radical_number/ruler, characteristics[], favorites (color/day/god/mantra/metal/stone/substone), friendly/evil/neutral numbers, destiny, name_number, date_considered."
  ,
  "/extended-horoscope/rudraksh-suggestion": "Rudraksha guidance: recommended mukhi counts by intent (disease, money), mukhi_description, bot_response summary, and rudraksha name."
  ,
  "/extended-horoscope/varshapal-details": "Annual (Varshapal) highlights: muntha_sign/lord, varshpal_date, varsha_lagna/lord, dinratri_lord, trirashi_lord, current_ayanamsa."
  ,
  "/extended-horoscope/varshapal-year-chart": "Year chart signs array: each with rasi and planets placed; includes varshpal_date."
  ,
  "/extended-horoscope/sade-sati-table": "Chronological Saturn period table listing entries with retro flag, start/end dates, zodiac, type (Sade Sati/Ashtama/Kantaka/Ardhastama), dhaiya phase and direction."
  ,
  "/extended-horoscope/yoga-list": "Computed yogas: array with yoga name, meaning, strength_in_percentage, planets_involved[], houses_involved[]; plus aggregated counts for yogas, raja_yoga, dhana_yoga, daridra_yoga."
  ,
  "/extended-horoscope/kp-planets": "KP planet details by index: rasi/zodiac, retro, shorthand/full_name, house, degrees, pseudo rasi/nakshatra and lords, sub and sub-sub lords."
  ,
  "/extended-horoscope/kp-houses": "KP houses list: each house segment with start/end rasi, degrees, nakshatras, lords, contained planets[], and cusp sub/sub-sub lords."
  ,
  "/extended-horoscope/arutha-padas": "Arudha Padas A1–A12 with lord, name (e.g., AL, A2...), rasi_no and zodiac for each house."
  ,
  "/extended-horoscope/jaimini-karakas": "Karakas with names (Atma, Amatya, Bhratru, Matri, Putra, Gnati, Dara): planet, significator, house, zodiac, rasi_no, local/global degrees."
  ,
  "/panchang/festivals": "Festival and yoga highlights for a date: festival_list[] with festival_name/significance/type, and yogas[] with yoga_name/significance/type."
  ,
  "/panchang/panchang": "Full daily panchang: day, tithi, nakshatra, karana, yoga (each with name/number/timing/notes), rasi, ayanamsa, sun/moon positions, advanced_details (sunrise/sunset, moonrise/moonset, masa, paksha, ritu, years, muhurta), plus rahukaal/gulika/yamakanta and the calendar date."
  ,
  "/panchang/monthly-panchang": "Array of daily entries for the month; each day includes day name, tithi/nakshatra/karana/yoga with timings, rasi, advanced_details (sun_rise/sun_set/purnimata_date), rahukaal/gulika/yamakanta, and date."
  ,
  "/dosha/mangal-dosh": "Mangal dosh evaluation: factors text, boolean flags for presence from lagna/moon, overall is_dosha_present, bot_response summary, score, and cancellation info (score/reasons)."
  ,
  "/dosha/kaalsarp-dosh": "Kaal Sarp dosh check: is_dosha_present, bot_response, and remedies[] guidance strings when applicable."
  ,
  "/dosha/manglik-dosh": "Manglik breakdown: booleans for manglik_by_mars/saturn/rahuketu, factors[], aspects[] impacting houses, bot_response, and score."
  ,
  "/dosha/pitra-dosh": "Pitra dosh check: is_dosha_present and explanatory bot_response."
  ,
  "/dosha/papasamaya": "Papa points: rahu_papa, sun_papa, saturn_papa, mars_papa numeric contributions."
  ,
  "/pdf/horoscope-queue": "Queues horoscope PDF generation; response includes a temporary URL, availability window (from/to and duration), creation duration, lang, and remaining_pdf_calls."
  ,
  "/pdf/matching-queue": "Queues matching PDF generation; response includes a temporary URL, availability window (from/to and duration), creation duration, lang, and remaining_pdf_calls."
  ,
  "/horoscope/chart-image": "SVG chart (base64/XML) for a divisional chart with styling options; includes house grid and planet glyphs placed in houses."
  ,
  "/horoscope/ashtakvarga-chart-image": "SVG Ashtakvarga grid image with per-sign total points rendered and sign labels."
  ,
  "/horoscope/ashtakvarga": "Ashtakvarga data: ashtakvarga_order array, ashtakvarga_points matrix per planet (12 signs), and ashtakvarga_total per sign."
  ,
  "/horoscope/binnashtakvarga": "Binna Ashtakvarga: object with keys Ascendant, Sun, Moon, etc., each an array of 12 binna points per sign."
  ,
  "/horoscope/planetary-aspects": "House-wise aspects: for each house, rasi_no, zodiac, aspected_by_planet[] and aspected_by_planet_index[]."
  ,
  "/horoscope/planets-in-houses": "House-wise planet placement list: for each house, rasi_no, zodiac, planets[], planet_index[], and a signification summary."
  ,
  "/horoscope/divisional-charts": "Divisional chart placements (by div): indexed entries for Ascendant and planets with zodiac, rasi_no, house, retro, full_name, local_degree."
  ,
  "/horoscope/planet-details": "Per-planet KP/natal details: for each body, degrees, rasi/zodiac/house, nakshatra and lord/pada, avastha, lord_status, combust/retro flags, plus birth/current dasa and lucky elements with panchang and ghatka_chakra."
  ,
  "/horoscope/ascendant-report": "Ascendant summary array: ascendant, lord and its placement/strength, symbol, characteristics, lucky_gem, fasting day, mantra, qualities, and guidance texts."
  ,
  "/horoscope/planet-report": "Narrative report for a selected planet: locations, strengths, definitions, mantra, qualities, afflictions, personalised prediction, verbal_location, zodiac prediction, and character keywords."
  ,
  "/horoscope/personal-characteristics": "12-house personalised predictions: for each house, verbal_location, current_zodiac, lord_of_zodiac, lord locations, personalised_prediction, and lord_strength."
  ,
  "/western/natal-chart": "SVG/base64 natal wheel image showing 12 signs, houses, and planet glyphs/labels. Supports house_type, zodiac_type, size, format, and color customization."
  ,
  "/western/transit-chart": "SVG/base64 transit wheel overlaying natal with current transit positions. Params: transit_date/time/lat/lon/tz, house_type, zodiac_type; supports optional natal_color and sizing/format."
  ,
  "/western/synastry-chart": "SVG/base64 bi‑wheel for two charts (inner/outer rings) with signs, houses and planets; supports per‑person colors (p1_color, p2_color), size, format, house_type, zodiac_type."
  ,
  "/western/find-sun-sign": "Returns status and response { sun_sign, prediction, bot_response }. Uses house_type/zodiac_type to compute the sign."
  ,
  "/western/cusps-details": "Array of 12 cusp entries with: house, global_degree, sign, sign_no, local_degree — computed for given house_type and zodiac_type."
  ,
  "/western/aspects": "Aspect sets keyed by type (e.g., conjunction, trine, square, sextile, opposition). Each item: planet_one, planet_two, orb, aspect. Bodies can include points like ascendant, midheaven, nodes, lilith, sirius."
  ,
  "/western/planet-details": "Per‑body western positions object (ascendant, sun…): name, full_name, symbol, zodiac_no/name, local_degree, global_degree, zodiac_symbol, zodiac_element/quality, is_retro, house."
  ,
  "/western/detailed-planet-report": "Interpretive report for a selected planet with house, zodiac_no/zodiac_name, and narrative strings: house_content and zodiac_content; also returns planet_name."
  ,
  "/western/planet-transit-dates": "Yearly transit map: transit_data index→{ date, zodiacSign (number), retro, global_degrees } for the selected planet."
  ,
  "/western/planet-position-report": "Interpretive summary: planet_considered, planet_current_house, planet_original_lordship[], planet_in_house_prediction[], planet_current_zodiac, planet_origial_lordship_zodiacs_name[], planet_in_zodiacs_prediction, planet_in_zodiacs_prediction_key_words." 
  ,
  "/western/node-position-report": "Node report for Northnode/Southnode: node_considered, node_current_house, node_current_zodiac, node_lord, node_prediction (guidance narrative)."
  ,
  "/western/ascendant-position-report": "Ascendant narrative: planet_considered 'Ascendant', ascendant_current_zodiac, ascendant_lord, and ascendant_prediction text."
  ,
  "/western/simple-compatibility": "Sign‑pair compatibility: response { description (narrative), match_percentage, p1_sign, p2_sign }."
  ,
  "/western/synastry-aspects": "Synastry aspect sets under boy_to_girl_aspects keyed by type; each item has planet_one, planet_two, orb, aspect, and when available aspect_type."
  ,
  "/western/synastry-aspect-predictions": "Structured synastry interpretations: aspect_predictions_boy_to_girl keyed by aspect type; each item includes planet_one, planet_two, aspect, title, description."
  ,
  "/western/synastry-emotion-predictions": "Single string narrative focusing on emotional dynamics drawn from synastry aspects."
  ,
  "/western/synastry-finance-predictions": "Single string narrative focusing on financial synergy/risks inferred from synastry aspects."
  ,
  "/western/synastry-health-predictions": "Single string narrative focusing on health/fitness themes inferred from synastry aspects."
  ,
  "/western/synastry-intimacy-predictions": "Single string narrative focusing on intimacy/sexual chemistry inferred from synastry aspects."
  ,
  "/western/synastry-career-predictions": "Single string narrative focusing on career/collaboration dynamics inferred from synastry aspects."
  ,
  "/western/transit-planets": "Transit positions object per body with transit_zodiac_no/name/symbol/element/quality, transit_local/global_degree, transit_house, is_retro; supports direction p1_to_p2."
  ,
  "/western/daily-transit-prediction": "Daily domain scores with split_response texts derived from transits. Returns planet_sentence, total_score {score, split_response}, and domains: physique, health, relationship, career, travel, family, friends, finances, status."
  ,
  "/western/daily-transits": "Array of daily aspects between transit and natal: transit_planet, natal_planet, natal_planet_zodiac, aspect, start/end_degree (+ zodiac), start/end_time, exact_time, is_retrograde."
  ,
  "/western/weekly-transits": "Array of weekly transit aspects with same fields as daily; includes exact_degree/ exact_time when available."
  ,
  "/western/monthly-transits": "Array of monthly transit aspects with start/end/ exact degrees and times; includes exact_degree and exact_time where applicable."
  ,
  "/western/daily-horoscope": "Daily western reading: lucky_color, lucky_color_code, lucky_number[], bot_response with domain scores+split_response (physique, status, finances, relationship, career, travel, family, friends, health, total_score), and zodiac label."
  ,
  "/western/weekly-horoscope": "Weekly western reading: lucky_color, lucky_color_code, lucky_number[], week_number, bot_response domain scores+split_response, and zodiac label."
  ,
  "/western/yearly-horoscope": "Yearly western reading split into phases (e.g., phase_1..): for each domain (physique, health, relationship, career, travel, family, friends, finances, status) returns score and long-form prediction."
  ,
  "/utilities/gem-details": "Gem metadata and guidance: name/gem/key, planet, description, effects (good_results/diseases_cure), wearing instructions (finger, weight, day, metal), substitutes, not_to_wear_with, flaw_results[], time_to_wear, methods, mantra."
  ,
  "/utilities/geo-search": "City search results: for each match, name, alternate_name, country/code, full_name, coordinates [lat, lon], tz/tz_dst/current_dst, and time zone identifiers."
  ,
  "/utilities/geo-search-advanced": "Advanced geo search with date: like geo-search plus single tzone string and state_name where available; includes result_length."
  ,
  "/utilities/radical-number-details": "Narrative numerology content for a radical number: content paragraphs, fasting practice, fav_lord advice, fav_gayatri_mantra[], graha_mantra[], fav_mantra[], yantra guidance, and personality notes."
  ,
  "/utilities/nakshatra-vastu-details": "Vastu guidance by nakshatra: Nakshatra, Lord, Favorable_Direction, Room_Locations mapping, Avoidance tips, Weight guidance, Entrance_to_Avoid, and a summary Sentence."
  ,
  "/dashas/maha-dasha": "Mahadasha overview: arrays of mahadasha planet names and corresponding mahadasha_order dates, plus start_year, dasha_start_date, and dasha_remaining_at_birth."
  ,
  "/dashas/maha-dasha-predictions": "Mahadasha narrative list. Each item has dasha, dasha_start_year, dasha_end_year, long-form prediction, and planet_in_zodiac context. Also includes translated_mahadasha label."
  ,
  "/extended-horoscope/shad-bala": "Shadbala components per planet: uccha_bala, saptavargaja_bala, oJayugma/ojayugma_bala, kendra_bala, drekkna_bala, etc. Each key maps planet names to numeric strengths."
  ,
  "/extended-horoscope/varshapal-month-chart": "Monthly Varshapal sign placements: array of month entries; each has signs[] listing rasi and planets placed (e.g., Sun, Moon, Mars, etc.)."
  ,
  "/horoscope/ai-12-month-prediction": "AI-generated 12-month forecast split into periods. Each item contains specifications (start_date/end_date, start_month/end_month, dasha string, dasha_end, dasha_inflection, planet_transit_data) and predictions per domain (relationship, education, career, finance, house_and_vehicle, health, etc.) with probability, outcome, houseScores map, bot_response, and contributors."
  ,
  "/horoscope/western-planets": "Western chart positions: object keyed by ascendant and planets (sun, moon, mercury, venus, mars, jupiter, saturn, etc.), each with global_degree, local_degree, zodiac, zodiac_no, house, and retro flag."
  ,
  "/matching/dashakoot": "South-style dashakoot matching: sections like dina, gana, mahendra, sthree, yoni, rasi, rasiathi, vasya, rajju, vedha — each with relevant pair/star or lord fields, score value, description, name, and full_score."
  ,
  "/panchang/choghadiya-muhurta": "Day and night choghadiya blocks: arrays with start, end, muhurat (e.g., Amrit, Labh, Kaal, Rog), and type (Auspicious/Inauspicious/Good), plus day_of_week."
  ,
  "/panchang/hora-muhurta": "Hourly planet horas for the day: horas[] with start, end, hora (planet), benefits (advice), and lucky_gem."
  ,
  "/panchang/moon-calendar": "Daily moon calendar entries for a span: array with bot_response, luminance%, phase code, paksha, state (e.g., waxing gibbous, fullmoon), and date."
  ,
  "/panchang/moon-phase": "Single-day moon state: bot_response, luminance%, phase code, paksha, state, and date."
  ,
  "/panchang/moonrise": "Moonrise time for location/date: moon_rise string and a bot_response sentence."
  ,
  "/panchang/solarnoon": "Solar noon time for location/date: sun_noon string and a bot_response sentence."
  ,
  "/panchang/sunrise": "Sunrise time for location/date: sun_rise string and a bot_response sentence."
  ,
  "/panchang/sunset": "Sunset time for location/date: sun_set string and a bot_response sentence."
  ,
  "/panchang/retrogrades": "Retrograde status helper: status boolean and bot_response (for Sun/Moon always direct)."
  ,
  "/panchang/transit-dates": "Planet transit periods for a year: array of windows with start_date, end_date, zodiac, retro flag, rasi_no, and qualitative strength (e.g., Exalted, Debilitated, Strong)."
}

