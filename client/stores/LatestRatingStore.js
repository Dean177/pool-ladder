import Reflux from 'reflux';
import RatingsApi from '../webapi/RatingsApi';
import RatingActions from '../actions/RatingActions';


export default Reflux.createStore({
  listenables: RatingActions,

  init: function() {
    this.playerRatings = [];
  },


  getInitialState: function() {
    return [];
  },

  onGetLatest: function() {
    RatingsApi.getLatest()
      .then(this.onGetLatestComplete)
      .error(this.onGetLatestFailed)
  },

  onGetLatestComplete: function(playerRatings) {
    this.playerRatings = playerRatings;
    this.trigger(playerRatings);
  },

  onGetLatestFailed: function(err) {
    console.error("Failed to get ratings:", err)
  }
});
