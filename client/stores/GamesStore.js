var Reflux = require('reflux');
var GameActions = require('../actions/GameActions');
var GamesApi = require('../webapi/GamesApi');

module.exports =  Reflux.createStore({
  listenables: GameActions,

  init: function() {
    this.recentGames = {};
    // TODO connect to the server to receive updates
  },

  onGetRecentCompleted: function(games) {
    this.recentGames = games;
    this.trigger(games);
  },

  onGetRecentFailed: function(err) {
    console.log("loadAllFailed:", err);
  },

  onGetRecent: function() {
    GamesApi.getRecentGames()
      .then(this.onGetRecentCompleted)
      .error(this.onLoadAllFailed)
  }
});