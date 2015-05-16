import Reflux from 'reflux';
import PlayerActions from './../actions/PlayerActions';
import PlayerApi from '../webapi/PlayersApi';


export default Reflux.createStore({
  listenables: PlayerActions,

  init: function() {
    this.players = [];
    // TODO connect to the server to receive updates
  },

  getInitialState: function() {
    return [];
  },

  onLoadAllCompleted: function(players) {
    this.players = players;
    this.trigger(players);
  },

  onLoadAllFailed: function(err) {
    console.error("loadAllFailed:", err);
  },

  onLoadAll: function() {
    PlayerApi.getPlayers()
      .then(this.onLoadAllCompleted)
      .error(this.onLoadAllFailed)
  },

  onCreate: function(player) {
    PlayerApi.createPlayer(player)
      .then(this.onCreateCompleted)
      .error(this.onCreateFailed)
  },

  onCreateCompleted: function(newPlayer) {
    this.players.push(newPlayer);
    this.trigger();
  },

  onCreateFailed: function(err) {
    console.error("loadAllFailed:", err);
  }
});