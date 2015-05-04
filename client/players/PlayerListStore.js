var Reflux = require('reflux');
var PlayerActions = require('./PlayerActions');
var PlayerApi = require('../webapi/PlayersApi');

module.exports =  Reflux.createStore({

  init: function() {
    this.players = {};
    //this.listenTo(PlayerActions.update, this.onUpdate);
    this.listenTo(PlayerActions.loadAll, this.fetchPlayers);
    this.listenTo(PlayerActions.loadAllCompleted, this.onLoadAllCompleted);
    //this.listenTo(PlayerActions.loadAllFailed, this.onLoadAllFailed);
  },

  onLoadAllCompleted: function(players) {
    this.players = players;
    this.trigger(players);
  },

  onLoadAllFailed: function() {

  },

  fetchPlayers: function() {
    console.log("fetchplayers called");
    PlayerApi.getPlayers()
      .then(this.onLoadAllCompleted)
      .error(this.onLoadAllFailed)
  }
});