addEventListener("fetch", async (event) => {
  const { pathname } = new URL(event.request.url);
  if (pathname == '/') {
    event.respondWith(new Response(
      new TextDecoder().decode(await Deno.readFile("./index.html")),
      {
        headers: {
          'content-type': 'text/html'
        }
      }
    ));
  } else if (pathname == '/json') {
    event.respondWith(new Response(
      JSON.stringify({ name: "deno", app: "deploy"}),
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    ));
  } else if (pathname == '/image/x') {
    event.respondWith(new Response(
      await Deno.readFile("./deno_logo.svg"),
      {
        headers: {
          'content-type': 'image/svg+xml'
        }
      }
    ));
  }
});