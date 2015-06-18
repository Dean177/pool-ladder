import Reflux from 'reflux';
import LatestRatingStore from './LatestRatingStore';
import PlayerActions from './../actions/PlayerActions';


export default Reflux.createStore({
  init() {
    this.rankingsByPlayerId = {};
    this.listenTo(LatestRatingStore, this.onLatestRankings);
  },

  onLatestRankings(ratings) {
    this.rankingsByPlayerId = ratings.reduce((acc, player, index) => {
      let ranking = index + 1;
      acc[player.id] = ranking;

      return acc;
    }, {});

    this.trigger(this.rankingsByPlayerId);
  },

  getPlayerRankings() {
    this.trigger(this.rankingsByPlayerId);
  }
});

