import Reflux from 'reflux';
import GameActions from '../actions/GameActions';
import GamesApi from '../webapi/GamesApi';

export default Reflux.createStore({
  listenables: GameActions,

  init() {
    this.recentGames = [];
  },

  getGames() {
    this.trigger(this.recentGames);
  },

  onGetRecentGames() {
    GamesApi.getRecentGames()
      .then(GameActions.getRecentGames.completed)
      .error(GameActions.getRecentGames.failed)
  },

  onGetRecentGamesCompleted(games) {
    this.recentGames = games;
    this.trigger(games);
  },

  onGetRecentGamesFailed(err) {
    console.log("loadAllFailed: ", err);
  },

  onNewGame(game) {
    this.recentGames.push(game);
    this.trigger(this.recentGames);
  },

  onDeleteGame(gameId) {
    let matchingGame = this.recentGames.filter((game) => game.id === gameId);
    if (matchingGame.length == 1) {
      var index = this.recentGames.indexOf(matchingGame[0]);
      this.recentGames.splice(index, 1);
      this.trigger(this.recentGames);
    } else {
      console.error("Multiple games present with same Id");
    }
  }
});