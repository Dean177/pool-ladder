import Reflux from 'reflux';
import PlayerActions from './../actions/PlayerActions';
import PlayerApi from '../webapi/PlayersApi';


export default Reflux.createStore({
  listenables: [PlayerActions],

  init() {
    this.playerId = null;
    this.games = [];
  },

  onLoadPlayerDetail(id) {
    if (id === this.playerId && games.length > 0) {
      this.trigger(this.games);
    } else {
      this.playerId = id;
    }

    PlayerApi.getGames(id)
      .then(this.onLoadGamesCompleted)
      .error(this.onLoadGamesFailed)
  },

  onLoadGamesCompleted(playerGames) {
    this.trigger(playerGames);
  },

  onLoadGamesFailed(err) {
    console.log("Failed loading player games", err);
  }
});

