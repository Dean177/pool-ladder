import Reflux from 'reflux';
import RatingsApi from '../webapi/RatingsApi';
import RatingActions from '../actions/RatingActions';
import GameActions from '../actions/GameActions';

export default Reflux.createStore({
  listenables: [RatingActions, GameActions],

  init() {
    this.playerRatings = [];
  },

  onNewGame() {
    this.onGetLatestRatings();
  },

  getLatestRatings() {
    this.trigger(this.playerRatings);
  },

  onGetLatestRatings() {
    RatingsApi.getLatest()
      .then(RatingActions.getLatestRatings.completed)
      .error(RatingActions.getLatestRatings.failed);
  },

  onGetLatestRatingsCompleted(playerRatings) {
    let orderedPlayerRatings = playerRatings.sort(function(playerRatingA, playerRatingB) {
      let ratingA = playerRatingA.rating.newRating;
      let ratingB = playerRatingB.rating.newRating;
      return ratingA < ratingB ? 1 : ratingA > ratingB ? -1 : 0;
    });

    let playersWithRating = orderedPlayerRatings.map(({player, rating}, index) => {
      rating = rating || { newRating: 1000, change: 0};
      player.rating = rating.newRating;
      player.rank = index + 1;
      return player;
    });

    this.playerRatings = playersWithRating;
    this.trigger(playersWithRating);
  },

  onGetLatestRatingsFailed(err) {
    console.error("Failed to get ratings:", err)
  }
});
