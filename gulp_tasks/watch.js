var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function (done) {
  gulp.watch(config.templates, ['html']);
  gulp.watch(config.styles, ['styles']);
  gulp.start('watch-scripts');
  gulp.start('fb-flo');
  done();
});
