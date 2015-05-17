import Reflux from 'reflux';
import PlayerActions from './../actions/PlayerActions';
import PlayerApi from '../webapi/PlayersApi';


export default Reflux.createStore({
  listenables: [PlayerActions],

  onLoadDetail: function(id) {
    PlayerApi.getRatingHistory(id)
      .then(this.onLoadGamesComplete)
      .error(this.onLoadGamesFailed)
  },

  onLoadGamesComplete: function(playerRatings) {
    this.trigger(playerRatings);
  },

  onLoadGamesFailed: function(err) {
    console.log("Failed loading player ratings", err);
  }
});

