const express = require("express");
const {
  createRequestHandler,
} = require("@remix-run/express");

export function app() {
  const server = express();

  // needs to handle all verbs (GET, POST, etc.)
  server.all(
    "*",
    createRequestHandler({
      // `remix build` and `remix dev` output files to a build directory, you need
      // to pass that build to the request handler
      build: {
        ...require("./build")
      },

      // return anything you want here to be available as `context` in your
      // loaders and actions. This is where you can bridge the gap between Remix
      // and your server
      getLoadContext(req, res) {
        return {};
      },
    })
  );
  return server;
}
// app().listen(80, () => console.log('started on 80'))