import Reflux from 'reflux';
import PlayerActions from './../actions/PlayerActions';
import PlayersApi from '../webapi/PlayersApi';


export default Reflux.createStore({
  listenables: PlayerActions,

  init: function() {
    this.players = {};
  },

  getPlayers() {
    this.trigger(this.players);
  },

  onNewPlayer(player) {
    this.players[player.id] = player;
    this.trigger(this.players);
  },

  onLoadAllPlayers() {
    PlayersApi.getPlayers()
      .then(PlayerActions.loadAllPlayers.completed)
      .error(PlayerActions.loadAllPlayers.failed)
  },

  onLoadAllPlayersCompleted(players) {
    this.players = players;
    this.trigger(players);
  },

  onLoadAllPlayersFailed(err) {
    console.error("loadAllFailed:", err);
  }
});