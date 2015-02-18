module.exports = function (webpackConfig, paths) {
  var gulp = require('gulp'),
    path = require('path'),
    webpack = require('webpack'),
    runSequence = require('run-sequence'),
    HackedWebpackDevServer = require('../utils/hack/HackedWebpackDevServer.js'),
    $ = require('gulp-load-plugins')();


  var server = new HackedWebpackDevServer(webpack(webpackConfig), {
    //publicPath: webpackConfig.output.publicPath,
    contentBase: paths.app,
    hot: true
  });
  gulp.task('reload', function() {
    server.forceReload();
  });

  return function () {
    server.listen(3000, "localhost", function (err) {
      if (err) throw new $.util.PluginError("webpack-dev-server", err);

      gulp.src(paths.app + '/index.html')
        .pipe($.open('', {url: 'http://localhost:3000'}));

      gulp.watch(paths.less + '/**/*.less', function() {
        return runSequence('style', 'reload');
      });
    });
  }
};
