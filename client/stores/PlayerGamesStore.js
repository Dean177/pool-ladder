import Reflux from 'reflux';
import PlayerActions from './../actions/PlayerActions';
import PlayerApi from '../webapi/PlayersApi';


export default Reflux.createStore({
  listenables: [PlayerActions],

  onLoadPlayerDetail(id) {
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

