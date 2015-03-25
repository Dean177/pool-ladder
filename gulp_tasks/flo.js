var gulp = require('gulp');
var flo = require('fb-flo');
var fs  = require('fs');
var path = require('path');

var config = require('../config');

gulp.task('fb-flo', function (done) {
  flo(
    config.paths.dest, // Watch directory
    {
      port: 8888,
      host: 'localhost',
      verbose: false,
      glob: [
        '**/*.{js,css,html}',
        '!**/*.{tmp,log,jpg,png,gif}'
      ]
    },
    resolver)
      .once('ready', done);
});

function resolver(filepath, callback) { 
  var file = path.join(config.paths.dest, filepath);

  callback({
    resourceURL: filepath,
    contents: fs.readFileSync(file),
    update: function (_window, _resourceURL) { console.log('Resource ' + _resourceURL + ' has just been updated'); },
    reload: filepath.match(/\.(js|html)$/)
  });
}
