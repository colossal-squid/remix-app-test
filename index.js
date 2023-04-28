"use strict";
exports.__esModule = true;
var express = require("express");
var createRequestHandler = require("@remix-run/express").createRequestHandler;
var functions = require("firebase-functions");
exports.app = functions.https.onRequest(app());
/**
 * @return {function} an express app
 */
function app() {
    var server = express();
    server.use(express.static("public", {
        immutable: true,
        maxAge: "1y"
    }));
    // needs to handle all verbs (GET, POST, etc.)
    server.all("*", createRequestHandler({
        build: require('./build')
        // return anything you want here to be available as `context` in your
        // loaders and actions. This is where you can bridge the gap between Remix
        // and your server
        //   getLoadContext(req, res) {
        //     return {};
        //   },
    }));
    return server;
}
exports["default"] = app;
