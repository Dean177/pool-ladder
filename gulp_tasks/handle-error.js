var util = require('gulp-util');

module.exports = function (err) {
  util.log(err.message);
  this.emit("end");
};