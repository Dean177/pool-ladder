var path = require('path');

var rootDir = __dirname;
var sources = path.join(rootDir, 'client');

module.exports = {
    root: rootDir,
    sources: sources,
    nodeModules: path.join(rootDir, 'node_modules'),
    styles: path.join(sources, '**/*.less'),
    fonts: path.join(sources, 'fonts', '/**/*'),
    images: path.join(sources, 'images', '/**/*'),
    dest: path.join(rootDir, 'public')
};
