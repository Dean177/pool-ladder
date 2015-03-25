var gulp = require('gulp');
var requireDir = require('require-dir');
var dir = requireDir('./gulp_tasks');

gulp.task('default', ['build']);
