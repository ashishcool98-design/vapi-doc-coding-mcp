import routeDescriptions from "../../route_descriptions.cjs";
const SYNONYMS = {
    "planet details": ["horoscope/planet-details", "kp planets", "planet report", "western planet details"],
    planet: ["planets", "kp", "graha", "western"],
    mahadasha: ["maha-dasha", "current-mahadasha", "antar-dasha", "paryantar-dasha", "specific-sub-dasha"],
    antar: ["antar-dasha", "paryantar-dasha"],
    panchang: ["panchang", "tithi", "nakshatra", "yoga", "karana", "sunrise", "sunset", "moonrise"],
    matching: ["ashtakoot", "dashakoot", "western-match", "nakshatra-match", "papasamaya", "aggregate-match"],
    chart: ["chart-image", "divisional-charts", "ashtakvarga-chart-image", "natal-chart", "transit-chart", "synastry-chart"],
};
function normalize(text) {
    return text.toLowerCase().replace(/[^a-z0-9\/:\-\s_]/g, " ").replace(/\s+/g, " ").trim();
}
function tokenize(text) {
    return normalize(text).split(/[\s_\-\/]+/).filter(Boolean);
}
function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++)
        dp[i][0] = i;
    for (let j = 0; j <= n; j++)
        dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
        }
    }
    return dp[m][n];
}
function ratio(a, b) {
    if (!a && !b)
        return 1;
    const d = levenshtein(a, b);
    const maxLen = Math.max(a.length, b.length) || 1;
    return 1 - d / maxLen; // 0..1
}
function scoreEntry(query, route, description) {
    const q = normalize(query);
    const qTokens = tokenize(query);
    const routeNorm = normalize(route);
    const descNorm = normalize(description);
    // 1) Token overlap (weighted)
    const routeTokens = tokenize(route);
    const descTokens = tokenize(description);
    let overlap = 0;
    for (const t of qTokens) {
        if (routeTokens.includes(t))
            overlap += 2; // stronger if in route path
        if (descTokens.includes(t))
            overlap += 1;
    }
    // 2) Substring presence
    let substr = 0;
    if (routeNorm.includes(q))
        substr += 2;
    if (descNorm.includes(q))
        substr += 1;
    // 3) Fuzzy similarity against route basename and key terms from description
    const routeBase = routeNorm.split("/").filter(Boolean).pop() || routeNorm;
    const keyTerms = descTokens.slice(0, 30).join(" ");
    const fuzzy = Math.max(ratio(q, routeBase), ratio(q, keyTerms)) * 3; // weight
    // 4) Synonym boost
    let synonymBoost = 0;
    for (const [k, vals] of Object.entries(SYNONYMS)) {
        if (q.includes(k) || qTokens.includes(k)) {
            for (const v of vals) {
                if (routeNorm.includes(normalize(v)) || descNorm.includes(normalize(v))) {
                    synonymBoost += 2;
                    break;
                }
            }
        }
    }
    return overlap + substr + fuzzy + synonymBoost;
}
function buildSnippet(description, query, maxLen = 180) {
    const d = description.trim();
    const idx = d.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1)
        return d.length > maxLen ? d.slice(0, maxLen) + "…" : d;
    const start = Math.max(0, idx - Math.floor(maxLen / 3));
    const end = Math.min(d.length, start + maxLen);
    return (start > 0 ? "…" : "") + d.slice(start, end) + (end < d.length ? "…" : "");
}
export const SEARCH_FEATURES_TOOL = {
    name: "search_features",
    description: "Fuzzy search over route_descriptions by keywords (supports synonyms like 'planet details', 'mahadasha'). Returns most probable routes with scores and snippets.",
    inputSchema: {
        type: "object",
        properties: {
            query: { type: "string", description: "Search text (e.g., 'planet details', 'mahadasha', 'panchang sunrise')." },
            limit: { type: "number", description: "Max results (default 10)." }
        },
        required: ["query"],
    },
};
export function handleSearchFeatures(args) {
    const { query, limit } = args || {};
    const max = Math.min(Math.max(limit ?? 10, 1), 50);
    const entries = Object.entries(routeDescriptions).map(([route, description]) => {
        const score = scoreEntry(query, route, description);
        const snippet = buildSnippet(description, query);
        return { route, description, score, snippet };
    });
    entries.sort((a, b) => b.score - a.score);
    const top = entries.slice(0, max).filter(e => e.score > 0);
    if (top.length === 0) {
        return {
            content: [{ type: "text", text: `No matches for "${query}". Try simpler terms or synonyms (e.g., 'planet details', 'mahadasha').` }],
        };
    }
    let out = `# Search Results (features)\n\n`;
    for (const e of top) {
        out += `- ${e.route} (score: ${e.score.toFixed(2)})\n`;
        out += `  ${e.snippet}\n`;
    }
    return { content: [{ type: "text", text: out }] };
}
