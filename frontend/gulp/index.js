var gulp = require('gulp'),
  runSequence = require('run-sequence'),
  del = require('del'),
  path = require('path');

var projectRoot = path.join(__dirname, '..');
var paths = {
  app: path.join(projectRoot, 'app'),
  html: path.join(projectRoot, 'app/*.html'),
  dist: path.join(projectRoot, 'dist'),
  less: path.join(projectRoot, 'app/less'),
  tmp: path.join(projectRoot, 'app/tmp')
};
global.dist = paths.dist;


var webpackConfig = require('./config/webpack.js')(paths);

gulp.task('clean', del.bind(null, [paths.dist], {force: true}));

gulp.task('build', ['clean'], function (cb) {
  runSequence(['html', 'style', 'pack'], cb);
});

gulp.task('default', [], function (cb) {
  global.dist = paths.tmp;
  runSequence(['style', 'serve'], cb);
});

gulp.task('html', function () {
    return gulp.src(paths.html)
        .pipe(gulp.dest(paths.dist));
});

gulp.task('style', require('./tasks/style')(paths));
gulp.task('pack', require('./tasks/pack')(webpackConfig, paths));
gulp.task('serve', function() {
  require('./tasks/serve')(webpackConfig, paths);
});
