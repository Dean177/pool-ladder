var gulp = require('gulp');
var bower = require('gulp-bower');
var path = require('path');

var config = require('../config');

gulp.task('bower', function() {
    bower().pipe(gulp.dest(config.paths.bowerComponents));

    // If these grow, gulp-concat them into a single file of js & css deps
    gulp
        .src([
            path.join(config.paths.bowerComponents, 'bootstrap', 'dist', 'css', 'bootstrap.css'),
            path.join(config.paths.bowerComponents, 'font-awesome', 'css', 'font-awesome.css'),
            path.join(config.paths.bowerComponents, 'swfobject', 'swfobject', 'src', 'swfobject.js')
        ])
        .pipe(gulp.dest(path.join(config.paths.dest, 'vendor')));

    gulp.src(path.join(config.paths.bowerComponents, 'font-awesome', 'fonts', "*"))
        .pipe(gulp.dest(path.join(config.paths.dest, 'fonts')))
});
