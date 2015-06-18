import Reflux from 'reflux';
import PlayerActions from './../actions/PlayerActions';
import PlayerApi from '../webapi/PlayersApi';


export default Reflux.createStore({
  listenables: [PlayerActions],

  onLoadPlayerDetail(id) {
    PlayerApi.getRatingHistory(id)
      .then(this.onLoadRatingsCompleted)
      .error(this.onLoadRatingsFailed)
  },

  onLoadRatingsCompleted(playerRatings) {
    this.trigger(playerRatings);
  },

  onLoadRatingsFailed(err) {
    console.log("Failed loading player ratings", err);
  }
});

