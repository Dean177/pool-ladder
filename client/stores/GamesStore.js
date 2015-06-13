import Reflux from 'reflux';
import GameActions from '../actions/GameActions';
import GamesApi from '../webapi/GamesApi';

export default Reflux.createStore({
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

  onGetRecent: function() {
    GamesApi.getRecentGames()
      .then(this.onGetRecentCompleted)
      .error(this.onLoadAllFailed)
  },

  onCreate: function(game) {
    this.recentGames.push(game);
    this.trigger();
  }
});