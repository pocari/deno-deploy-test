addEventListener("fetch", (event) => {
  const { path } = new URL(event.request.url);
  if (pathname == '/') {
    event.respondWith(new Response("Hello world xx"));
  } else if (pathname == '/hoge') {
    event.respondWith(new Response("Hello world yy"));
  }
});