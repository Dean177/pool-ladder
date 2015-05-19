var gulp = require('gulp');
var config = require('../config');
var path = require('path');

gulp.task('assets', function() {
  gulp
    .src([
      path.join(config.nodeModules, 'bootstrap', 'dist', 'css', 'bootstrap.css'),
      path.join(config.nodeModules, 'bootstrap', 'dist', 'css', 'bootstrap.css.map'),
      path.join(config.nodeModules, 'font-awesome', 'css', 'font-awesome.css')
    ])
    .pipe(gulp.dest(path.join(config.dest, 'vendor')));

  gulp.src([
      config.fonts,
      config.images,
      path.join(config.sources, 'MediaPlayback.swf')
    ],
    {base: config.sources})
    .pipe(gulp.dest(path.join(config.dest)));
});