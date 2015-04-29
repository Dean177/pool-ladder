var Reflux = require('reflux');

var GameActions = require('./GameActions');

module.exports = Reflux.createStore({

  listenables: [GameActions],

  init: function () {

  },

  onUpdate: function (player) {

  },

  onCreate: function (player) {

  }
});


