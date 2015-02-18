module.exports = function (paths) {
  var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    path = require('path'),
    less = require('gulp-less'),
    handleErrors = require('./handleErrors');

  return function () {
    return gulp.src(path.join(paths.less, '/**/*.less')).pipe($.sourcemaps.init())
    .pipe(less({
      paths: [ paths.less ]
    }).on('error', handleErrors))
    .pipe($.autoprefixer())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(global.dist));
  }
};
