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

  onNewPlayer: function(player) {
    this.players[player.id] = player;
    this.trigger(this.players);
  },

  onLoadAllPlayers: function() {
    PlayerApi.getPlayers()
      .then(this.onLoadAllPlayersCompleted)
      .error(this.onLoadAllPlayersFailed)
  },

  onLoadAllPlayersCompleted: function(players) {
    this.players = players;
    this.trigger(players);
  },

  onLoadAllPlayersFailed: function(err) {
    console.error("loadAllFailed:", err);
  }
});