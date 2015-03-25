var gulp = require('gulp');
var config = require('../config');
var path = require('path');

gulp.task('assets', function() {
    gulp.src([
            config.paths.fonts,
            config.paths.images,
            path.join(config.paths.sources, 'MediaPlayback.swf')
        ],
        {base: config.paths.sources})
        .pipe(gulp.dest(path.join(config.paths.dest)));
});