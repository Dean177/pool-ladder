import Reflux from 'reflux';

import PlayerActions from '../actions/PlayerActions';
import GameActions from '../actions/GameActions';

import GamesApi from '../webapi/GamesApi';

export default Reflux.createStore({
  init() {
    this.listenTo(PlayerActions.newPlayer, this.onNewPlayer);
    this.listenTo(GameActions.newGame, this.onNewGame);
  },

  onNewPlayer(player) {
    this.createToast({
      style: 'success',
      body: "",
      title: `Created new player: ${player.name}`,
      options: {
        timeOut: 50000,
        extendedTimeOut: 2000
      }
    });
  },

  onNewGame(game) {
    this.createToast({
      style: 'success',
      body: 'Click to undo',
      title: `${game.winner.name} beat ${game.loser.name}`,
      options: {
        closeButton: true,
        timeOut: 10000,
        extendedTimeOut: 2000,
        handleOnClick: () => { this.deleteGame(game) }
      }
    });
  },

  deleteGame(game) {
    GamesApi.deleteGame(game)
      .then(this.onDeleteSuccess)
      .error(this.onDeleteFailure)
  },

  onDeleteSuccess(gameId) {
    GameActions.deleteGame(gameId);
    this.createToast({
      style: 'success',
      body: '',
      title: "Successfully removed game.",
      options: {
        timeOut: 5000,
        extendedTimeOut: 2000
      }
    });
  },

  onDeleteFailure(err) {
    this.createToast({
      style: 'error',
      body: err.message,
      title: "Failed to remove game.",
      options: {
        timeOut: 5000,
        extendedTimeOut: 2000
      }
    });
  },

  createToast(toast) {
    this.trigger(toast);
  }
});