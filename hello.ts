addEventListener("fetch", (event) => {
  const { path } = new URL(event.request.url);
  if (path == '/') {
    event.respondWith(new Response("Hello world xx"));
  } else if (path == '/hoge') {
    event.respondWith(new Response("Hello world yy"));
  }
});