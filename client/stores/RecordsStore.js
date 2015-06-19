import Reflux from 'reflux';
import GameActions from '../actions/GameActions';
import RecordsApi from '../webapi/RecordsApi';

export default Reflux.createStore({
  listenables: [GameActions],

  init() {
    this.records = {
      maxRatings: [],
      minRatings: []
    };
  },

  getRecords() {
    console.log("Get Records called", this.records);
    if (this.records.maxRatings.length > 0) {
      this.trigger(this.records);
    } else {
      this.refreshRecords();
    }
  },

  onNewGame() {
    this.refreshRecords();
  },

  onDeleteGame(gameId) {
    this.refreshRecords();
  },

  refreshRecords() {
    RecordsApi.getRecords()
      .then(this.onLoadRatingsCompleted)
      .error(this.onLoadRatingsFailed)
  },

  onLoadRatingsCompleted(records) {
    console.log(records);

    //if (records != records) {
    //  this.records = records;
    //  this.trigger(records);
    //}

    this.records = records;
    this.trigger(records);

    console.log(this.records);
  },

  onLoadRatingsFailed(err) {
    console.error("Failed to load records", err);
  }
});

