var gulp = require('gulp');
var util = require('gulp-util');
var del = require('del');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var config = require('../config');
var handleError = require('./handle-error');

gulp.task('clean-scripts', function (done) {
  del([config.dest + '/**/*.js'], done);
});

gulp.task('scripts', function() {
    return compileScripts(false);
});

gulp.task('watch-scripts', function () {
  return compileScripts(true);
});

function compileScripts (watchForChanges) {
    var bundler = browserify(browserifyConfig)
        .transform(babelify)
        .on('error', handleError)
      ;

    if (watchForChanges) {
        util.log("Script watcher started.");
        bundler = watchify(bundler);
    }

    var bundle = function() {
        util.log("Bundling scripts");
        return bundler
            .bundle()
            .on('error', handleError)
            .pipe(source('main.js'))
            .pipe(gulp.dest(config.dest));
    };

    bundler.on('update', bundle);

    return bundle();
}

var browserifyConfig = {
  entries: ['./index.jsx'],
  basedir: config.sources,
  extensions: ['.jsx', 'js'],
  insertGlobals: true,
  transforms: [],
  debug: true,
  cache: {}, packageCache: {}, fullPaths: true // Required for watchify
};