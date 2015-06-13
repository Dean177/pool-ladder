var gulp = require('gulp');
var config = require('../config');
var path = require('path');

gulp.task('assets', function() {
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