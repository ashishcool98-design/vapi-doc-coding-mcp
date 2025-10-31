# Architecture (Concise)

## Files

- `src/index.ts`: MCP server entry (stdio transport, tool registry, routing).
- `src/types.ts`: Shared interfaces (EndpointParam, Endpoint, ResponseData, arg types).
- `src/global.d.ts`: TypeScript declarations for `.cjs` data files.
- `src/tools/searchRoutes.ts`: Route search tool (tokenized + synonyms).
- `src/tools/checkEndpoint.ts`: Endpoint inspector.
- `src/tools/checkResponse.ts`: Example response viewer.

## Tools

- `list_routes`: returns the full route list (simple list from `routes.cjs`).
- `search_routes`: smarter search over routes using:
  - tokenization of the query (split on spaces, hyphens, underscores)
  - case-insensitive substring match per token
  - synonyms map (e.g., "planet details" → horoscope planet routes; "mahadasha" → dashas routes)
  - fallback to list_routes if no match
- `check_endpoint`: looks up URL/method/params from `endpoints_new_copy.cjs` (exact path first, then partial).
- `check_response`: shows response example from `url_responses_by_category.cjs` by parsing `category/endpoint-name`.

## Flow

Claude → MCP stdio → `index.ts` → selected tool handler → data lookup → formatted text response.

## Data

- `routes.cjs`: array of route paths.
- `endpoints_new_copy.cjs`: array of endpoints with param schemas.
- `url_responses_by_category.cjs`: nested examples by category → endpoint.

## Notes

- For broad queries like "planet details", "mahadasha", use `search_routes` (synonyms help map to the right family of routes). If still no results, run `list_routes` and refine.

## Build

`npm run build` compiles TypeScript to `build/` (ES modules). `.cjs` data is imported with TS declarations via `global.d.ts`.

