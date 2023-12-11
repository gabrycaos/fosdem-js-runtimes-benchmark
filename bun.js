Bun.serve({
  fetch(request) {
    return new Response("Hello world from Bun!");
  },
});