import Reflux from 'reflux';

import PlayerActions from '../actions/PlayerActions.js';
import GameActions from '../actions/GameActions.js';

import GamesApi from '../webapi/GamesApi';

export default Reflux.createStore({
  listenables: [PlayerActions, GameActions],

  init() {
    this.toasts = []
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
    this.toasts.push(toast);
    this.trigger(toast);
  }
});