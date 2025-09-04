// api/proxy.js
// Vercel Node.js Function (Web standard API)
export const runtime = 'nodejs';

// CORS helpers
function corsHeaders(request) {
  const origin = request.headers.get('Origin') || '*';
  return {
    'Access-Control-Allow-Origin': origin, // or lock to your vercel domain
    'Vary': 'Origin',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

export function OPTIONS(request) {
  return new Response(null, { status: 204, headers: corsHeaders(request) });
}

// Core proxy handler (used for GET/POST/PUT/PATCH/DELETE)
async function handle(request) {
  const url = new URL(request.url);
  // Frontend will call: /api/proxy?path=/your/api/path
  const path = url.searchParams.get('path') ?? '';
  if (!process.env.TARGET_API) {
    return new Response(
      JSON.stringify({ error: 'TARGET_API not set' }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders(request) } }
    );
  }

  // Build the target URL safely
  const base = process.env.TARGET_API.endsWith('/')
    ? process.env.TARGET_API.slice(0, -1)
    : process.env.TARGET_API;
  const safePath = path.startsWith('/') ? path : `/${path}`;
  const targetUrl = `${base}${safePath}`;

  // Forward headers/body
  const fwdHeaders = new Headers(request.headers);
  fwdHeaders.delete('host');

  const body =
    request.method === 'GET' || request.method === 'HEAD'
      ? undefined
      : await request.arrayBuffer(); // forwards JSON/form/etc.

  const upstream = await fetch(targetUrl, {
    method: request.method,
    headers: fwdHeaders,
    body,
  });

  // Stream back response (preserve content-type)
  const outHeaders = {
    ...corsHeaders(request),
    'Content-Type': upstream.headers.get('content-type') || 'application/json',
  };

  return new Response(upstream.body, { status: upstream.status, headers: outHeaders });
}

export { handle as GET, handle as POST, handle as PUT, handle as PATCH, handle as DELETE };
