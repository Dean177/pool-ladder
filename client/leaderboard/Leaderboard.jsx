import  React from 'react';
import Reflux from 'reflux';

import LatestRatingStore from '../stores/LatestRatingStore';
import RatingActions from '../actions/RatingActions'
import PlayerCard from '../shared/PlayerCard/PlayerCard';

export default React.createClass({
  mixins:[Reflux.connect(LatestRatingStore, 'playerRatings')],

  componentDidMount: function() {
    RatingActions.getLatest();
  },

  render: function () {

    var orderedPlayerRatings = this.state.playerRatings;
    orderedPlayerRatings.sort(function(playerRatingA, playerRatingB) {
      if (playerRatingA.rating.newRating < playerRatingB.rating.newRating) {
        return 1
      } else if (playerRatingA.rating.newRating > playerRatingB.rating.newRating) {
        return -1;
      } else {
        return 0;
      }
    });

    var leaderboardRows = orderedPlayerRatings.map(function({ player, rating }) {
      return (
        <PlayerCard key={player.id} player={player} rating={rating} />
      );
    });

    return (
      <div>
        <h2 className="page-header">Leaderboard</h2>
        <div className="leaderboard">
          {leaderboardRows}
        </div>
      </div>
    );
  }
});
