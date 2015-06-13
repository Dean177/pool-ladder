var concatCss = require('gulp-concat-css');
var del = require('del');
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

var handleError = require('./handle-error');
var config = require('../config');

gulp.task('clean-styles', function (done) {
  del([config.dest + '/index.css'], done);
});

gulp.task('styles', function () {
  gulp
    .src([
      path.join(config.nodeModules, 'bootstrap', 'dist', 'css', 'bootstrap.css'),
      path.join(config.nodeModules, 'font-awesome', 'css', 'font-awesome.css'),
      path.join(config.nodeModules, 'animate.css', 'animate.css'),
      path.join(config.nodeModules, 'toastr', 'toastr.css')
    ])
    .on('error', handleError)
    .pipe(concatCss("vendor.css", {rebaseUrls: false}))
    .on('error', handleError)
    .pipe(gulp.dest(path.join(config.dest,"styles")));

  return gulp.src(config.styles)
    .pipe(less())
      .on('error', handleError)
    .pipe(concatCss("main.css", {rebaseUrls: false}))
    .pipe(gulp.dest(path.join(config.dest,"styles")));
});
