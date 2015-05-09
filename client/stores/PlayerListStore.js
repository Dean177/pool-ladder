var Reflux = require('reflux');
var PlayerActions = require('./../actions/PlayerActions');
var PlayerApi = require('../webapi/PlayersApi');

module.exports =  Reflux.createStore({
  listenables: PlayerActions,

  init: function() {
    this.players = [];
    // TODO connect to the server to receive updates
  },

  getInitialState: function() {
    return [];
  },

  onLoadAllCompleted: function(players) {
    console.log("players: ", players);
    this.players = players;
    this.trigger(players);
  },

  onLoadAllFailed: function(err) {
    console.log("loadAllFailed:", err);
  },

  onLoadAll: function() {
    PlayerApi.getPlayers()
      .then(this.onLoadAllCompleted)
      .error(this.onLoadAllFailed)
  }
});