const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api", { target: "http://localhost:53274" }));
  app.use(proxy("/Scripts", { target: "http://localhost:53274" }));
  app.use(proxy("/signalr", { target: "http://localhost:53274", ws: true }));
  app.use(
    proxy("/signalr/hubs", { target: "http://localhost:53274", ws: true })
  );
};
