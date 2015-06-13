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

  onGetLatestRatings() {
    RatingsApi.getLatest()
      .then(this.onGetLatestRatingsComplete)
      .error(this.onGetLatestRatingsFailed)
  },

  onGetLatestRatingsComplete(playerRatings) {
    this.playerRatings = playerRatings;
    this.trigger(playerRatings);
  },

  onGetLatestRatingsFailed(err) {
    console.error("Failed to get ratings:", err)
  }
});
