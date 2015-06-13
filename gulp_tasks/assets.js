var gulp = require('gulp');
var config = require('../config');
var path = require('path');

gulp.task('assets', function() {
  // TODO concat these as in styles.js
  gulp
    .src([
      path.join(config.nodeModules, 'bootstrap', 'dist', 'css', 'bootstrap.css'),
      path.join(config.nodeModules, 'bootstrap', 'dist', 'css', 'bootstrap.css.map'),
      path.join(config.nodeModules, 'font-awesome', 'css', 'font-awesome.css'),
      path.join(config.nodeModules, 'animate.css', 'animate.css'),
      path.join(config.nodeModules, 'toastr', 'toastr.css')
    ])
    .pipe(gulp.dest(path.join(config.dest, 'vendor')));

  gulp.src([path.join(config.nodeModules, 'font-awesome', 'fonts', '*')])
    .pipe(gulp.dest(path.join(config.dest, 'fonts')));

  gulp.src([
      config.fonts,
      config.images,
      path.join(config.sources, 'MediaPlayback.swf')
    ],
    {base: config.sources})
    .pipe(gulp.dest(path.join(config.dest)));
});