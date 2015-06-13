import Reflux from 'reflux';
import GameActions from '../actions/GameActions';
import GamesApi from '../webapi/GamesApi';

export default Reflux.createStore({
  listenables: GameActions,

  init() {
    this.recentGames = [];
    // TODO connect to the server to receive updates
  },

  onGetRecentCompleted(games) {
    this.recentGames = games;
    this.trigger(games);
  },

  onGetRecentFailed(err) {
    console.log("loadAllFailed: ", err);
  },

  onGetRecent() {
    GamesApi.getRecentGames()
      .then(this.onGetRecentCompleted)
      .error(this.onLoadAllFailed)
  },

  onCreate(game) {
    this.recentGames.push(game);
    this.trigger(this.recentGames);
  },

  onDelete(gameId) {
    let matchingGame = this.recentGames.filter((game) => game.id === gameId);
    if (matchingGame.length == 1) {
      var index = this.recentGames.indexOf(matchingGame[0]);
      this.recentGames.splice(index, 1);
      this.trigger(this.recentGames);
    }
  }
});