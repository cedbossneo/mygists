module.exports = function (webpackConfig, paths) {
  var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

  return function() {
    return gulp.src('')
      .pipe($.webpack(webpackConfig))
      .pipe(gulp.dest(paths.dist));
  }
};
