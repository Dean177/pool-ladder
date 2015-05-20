var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');

var handleError = require('./handle-error');
var config = require('../config');

gulp.task('clean-styles', function (done) {
  del([config.dest + '/index.css'], done);
});

gulp.task('styles', function () {
  return gulp.src(config.styles)
    .pipe(less())
      .on('error', handleError)
    .pipe(concatCss("main.css", {rebaseUrls: false}))
    .pipe(gulp.dest(config.dest));
});
