var Reflux = require('reflux');
var PlayerActions = require('./PlayerActions');
var $ = require('jquery');

var initialState = {
  loading: false,
  players: []
};

module.exports = Reflux.createStore({
  listenables: PlayerActions,

  init: function () {
    // Fetch Players
  },

  getInitialState: function () {
    return this.state = initialState;
  },

  onUpdate: function (player) {

  },

  updatePlayer: function (player) {

  },

  onCreate: function (player) {

  },

  createPlayer: function (player) {

  },

  updateList: function (list) {

  }
});
