/**
 * Created by aziphael on 01/02/15.
 */
var gulp = require('gulp'),
  fs = require('fs'),
  path = require('path'),
  Ordered = require('ordered-read-streams'),
  StreamCache = require("stream-cache"),
  WebpackDevServer = require('webpack-dev-server');

HackedWebpackDevServer = function (compiler, options) {
  WebpackDevServer.call(this, compiler, options);

  var myJs = new StreamCache();
  new Ordered([
    fs.createReadStream(path.join(__dirname, "../../../node_modules/webpack-dev-server/client/web_modules/socket.io", "socket.io.js")),
    fs.createReadStream(path.join(__dirname, "forceReload.js"))
  ]).pipe(myJs);

  this.app.get("/forceReload.js", function (req, res) {
    res.setHeader("Content-Type", "application/javascript");
    myJs.pipe(res);
  });
};

HackedWebpackDevServer.prototype = Object.create(WebpackDevServer.prototype);

HackedWebpackDevServer.prototype.forceReload = function () {
  this.io.sockets.emit('force-reload');
};

module.exports = HackedWebpackDevServer;