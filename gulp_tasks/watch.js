var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function (done) {
  gulp.watch(config.paths.templates, ['html']);
  gulp.watch(config.paths.styles, ['styles']);
  gulp.start('watch-scripts');
  gulp.start('fb-flo');
  done();
});
