import Reflux from 'reflux';
import RatingsApi from '../webapi/RatingsApi';
import RatingActions from '../actions/RatingActions';


export default Reflux.createStore({
  listenables: [RatingActions],

  init() {
    this.playerRatings = [];
  },

  getLatestRatings() {
    this.trigger(this.playerRatings);
  },

  onGetLatestRatings() {
    RatingsApi.getLatest()
      .then(RatingActions.getLatestRatings.completed)
      .error(RatingActions.getLatestRatings.failed)
  },

  onGetLatestRatingsCompleted(playerRatings) {
    let orderedPlayerRatings = playerRatings.sort(function(playerRatingA, playerRatingB) {
      if (playerRatingA.rating.newRating < playerRatingB.rating.newRating) {
        return 1
      } else if (playerRatingA.rating.newRating > playerRatingB.rating.newRating) {
        return -1;
      } else {
        return 0;
      }
    });
    this.playerRatings = orderedPlayerRatings;

    this.trigger(orderedPlayerRatings);
  },

  onGetLatestRatingsFailed(err) {
    console.error("Failed to get ratings:", err)
  }
});
