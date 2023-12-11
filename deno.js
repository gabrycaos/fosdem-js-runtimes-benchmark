function handler(_req) {
  return new Response("Hello world from Deno!");
}

Deno.serve(handler)