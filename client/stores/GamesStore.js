var Reflux = require('reflux');
var GameActions = require('../actions/GameActions');
var GamesApi = require('../webapi/GamesApi');

module.exports =  Reflux.createStore({
  listenables: GameActions,

  init: function() {
    this.recentGames = [];
    // TODO connect to the server to receive updates
  },

  onGetRecentCompleted: function(games) {
    this.recentGames = games;
    this.trigger(games);
  },

  onGetRecentFailed: function(err) {
    console.log("loadAllFailed: ", err);
  },

  onCreateCompleted: function(game) {
    this.recentGames.push(game);
    this.trigger();
  },

  onCreateFailed: function(err) {
    console.log("createGameFailed: ", err)
  },

  onGetRecent: function() {
    GamesApi.getRecentGames()
      .then(this.onGetRecentCompleted)
      .error(this.onLoadAllFailed)
  },

  onCreate: function(game) {
    GamesApi.createGame(game)
      .then(this.onCreateCompleted)
      .error(this.onCreateFailed)
  }
});