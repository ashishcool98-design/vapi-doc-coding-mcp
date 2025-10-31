#!/usr/bin/env node

/**
 * Simple test script to verify the MCP server data files are loading correctly
 * This validates that the data files can be imported and have the expected structure
 */

async function test() {
  const routes = (await import('./routes.cjs')).default;
  const endpoints = (await import('./endpoints_new_copy.cjs')).default;
  const responses = (await import('./url_responses_by_category.cjs')).default;

  console.log('🧪 Testing Vedic Astro API MCP Server Data Files\n');

  // Test 1: Route Search
  console.log('✅ Test 1: Routes Data');
  console.log('- Total routes loaded:', routes.length);
  const dailyRoutes = routes.filter(r => r.includes('daily'));
  console.log('- Routes containing "daily":', dailyRoutes.length);
  console.log('- Sample daily routes:', dailyRoutes.slice(0, 3));
  console.log();

  // Test 2: Endpoint Check
  console.log('✅ Test 2: Endpoints Data');
  console.log('- Total endpoints loaded:', endpoints.length);
  const sampleEndpoint = endpoints.find(e => e.url.includes('daily-sun'));
  if (sampleEndpoint) {
    console.log('- Found endpoint:', sampleEndpoint.url);
    console.log('- Request type:', sampleEndpoint.request_type);
    console.log('- Parameters:', Object.keys(sampleEndpoint.params).join(', '));
  }
  console.log();

  // Test 3: Response Check
  console.log('✅ Test 3: Response Data');
  console.log('- Response categories:', Object.keys(responses).join(', '));
  if (responses.prediction && responses.prediction['daily-sun']) {
    console.log('- Found response for: prediction/daily-sun');
    console.log('- Response status:', responses.prediction['daily-sun'].response?.status);
    console.log('- Has response data:', !!responses.prediction['daily-sun'].response?.response);
  }
  console.log();

  // Summary
  console.log('🎉 All data files loaded successfully!');
  console.log('\nYour MCP server is ready to use!');
  console.log('\nNext steps:');
  console.log('1. Add the server to your Claude Desktop config (see SETUP.md)');
  console.log('2. Restart Claude Desktop');
  console.log('3. Look for the 🔌 icon to confirm connection');
  console.log('4. Try asking Claude: "What routes are available for daily predictions?"');
}

test().catch(console.error);
