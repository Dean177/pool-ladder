import Reflux from 'reflux';
import PlayerActions from './../actions/PlayerActions';
import PlayerApi from '../webapi/PlayersApi';


export default Reflux.createStore({
  listenables: PlayerActions,

  init: function() {
    this.players = {};
  },

  getPlayers() {
    this.trigger(this.players);
  },

  onCreate: function(player) {
    this.players[player.id] = player;
    this.trigger(this.players);
  },

  onLoadAll: function() {
    PlayerApi.getPlayers()
      .then(this.onLoadAllCompleted)
      .error(this.onLoadAllFailed)
  },

  onLoadAllCompleted: function(players) {
    this.players = players;
    this.trigger(players);
  },

  onLoadAllFailed: function(err) {
    console.error("loadAllFailed:", err);
  }
});