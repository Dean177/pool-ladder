var Reflux = require('reflux');

var GameActions = require('./GameActions');

module.exports = Reflux.createStore({

  listenables: [GameActions],

  init: function () {

  },

  getInitialState: function () {

  },

  onUpdate: function (game) {

  },

  updatePlayer: function (game) {

  },

  onCreate: function (game) {

  },

  createPlayer: function (game) {

  },

  updateList: function (list) {

  }
});


