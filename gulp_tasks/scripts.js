var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var watchify = require('watchify');
var es6ify = require('es6ify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var config = require('../config');
var handleError = require('./handle-error');

gulp.task('clean-scripts', function (done) {
  del([config.paths.dest + '/**/*.js'], done);
});

gulp.task('scripts', function() {
    return compileScripts(false);
});

gulp.task('watch-scripts', function () {
  return compileScripts(true);
});

function compileScripts  (watchForChanges) {
    es6ify.traceurOverrides = {experimental: true};
    var bundler = browserify({
        entries: ['./index.jsx'],
        basedir: config.paths.sources,
        extensions: ['.jsx'],
        insertGlobals: true,
        transforms: [],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true // Required for watchify
    })
        .on('error', handleError)
        .transform(reactify)
        .on('error', handleError)
        .transform(es6ify.configure(/.jsx/))
        .on('error', handleError);

    if (watchForChanges) {
        console.log("[" + new Date() + "] Script watcher started.");
        bundler = watchify(bundler);
    }

    var bundle = function() {
        console.log("[" + new Date() + "] Bundling scripts");
        return bundler
            .bundle()
            .on('error', handleError)
            .pipe(source('main.js'))
            .pipe(gulp.dest(config.paths.dest));
    };

    bundler.on('update', bundle);

    return bundle();
}