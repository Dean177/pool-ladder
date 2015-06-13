import Reflux from 'reflux';
import RatingsApi from '../webapi/RatingsApi';
import RatingActions from '../actions/RatingActions';


export default Reflux.createStore({
  listenables: RatingActions,

  init() {
    this.playerRatings = [];
  },

  getLatestRatings() {
    this.trigger(this.playerRatings);
  },

  onGetLatest() {
    RatingsApi.getLatest()
      .then(this.onGetLatestComplete)
      .error(this.onGetLatestFailed)
  },

  onGetLatestComplete(playerRatings) {
    this.playerRatings = playerRatings;
    this.trigger(playerRatings);
  },

  onGetLatestFailed(err) {
    console.error("Failed to get ratings:", err)
  }
});
