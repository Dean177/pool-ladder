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

    var leaderboardRows = this.state.playerRatings.map(function({ player, rating }) {
      return (
        <PlayerCard player={player} rating={rating} />
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
