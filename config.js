var path = require('path');

var rootDir = __dirname;
var sources = path.join(rootDir, 'client');

module.exports = {
  paths: {
    root: rootDir,
    sources: sources,
    bowerComponents: path.join(rootDir, 'bower_components'),
    server: path.join(rootDir, 'server/server.js'),
    serverPath: path.join(rootDir, 'server'),
    styles: path.join(sources, '**/*.less'),
    fonts: path.join(sources, 'fonts', '/**/*'),
    images: path.join(sources, 'images', '/**/*'),
    tests: path.join(rootDir, '**/*.spec.{js,jsx}'),
    dest: path.join(rootDir, 'app', 'public')
  }
};
