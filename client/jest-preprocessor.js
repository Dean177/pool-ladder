"use strict";
var babel = require('babel-jest');

module.exports = {
  process: function(src, filename) {
    // Babel actually handles both ES6 & JSX without any additional configuration: https://babeljs.io/docs/usage/jsx/
    return babel.process(src, filename);
  }
};