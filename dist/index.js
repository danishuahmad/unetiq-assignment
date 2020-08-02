"use strict";

var cors = require('cors');

var path = require("path");

var express = require("express");

var bodyParser = require("body-parser");

var _require = require("./clientRender"),
    clientRenderer = _require["default"];

var _require2 = require("./routes/api"),
    apiRoutes = _require2["default"]; //const { default: clientRenderer } = require("./clientRender");


var PORT = process.env.PORT || 3001;
var app = express();
app.use(cors());
app.use("/static", express["static"](path.resolve(__dirname, "..", "build"))); // only use the raw bodyParser for stripe web-hook

app.use(function (req, res, next) {
  bodyParser.json()(req, res, next);
});
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use("/api", apiRoutes);
app.use("/", clientRenderer);
var server = app.listen(PORT, function () {
  console.log("App listening on port ".concat(PORT, "!"));
});
app.on("error", onError);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT; // handle specific listen errors with friendly messages

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;

    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;

    default:
      throw error;
  }
}