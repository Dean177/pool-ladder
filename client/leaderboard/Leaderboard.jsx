import  React from 'react';
import { Navigation } from 'react-router';
import Reflux from 'reflux';
import { FlatButton } from 'material-ui';

import FontAwesome from '../shared/FontAwesome';
import LatestRatingStore from '../stores/LatestRatingStore';
import RatingActions from '../actions/RatingActions'
import PlayerCard from '../shared/PlayerCard/PlayerCard';


export default React.createClass({
  mixins:[Navigation, Reflux.connect(LatestRatingStore, 'playerRatings')],

  componentDidMount: function() {
    RatingActions.getLatest();
  },

  goToNewGame: function() { this.transitionTo('newGame'); },

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

    var leaderboardRows = orderedPlayerRatings.map(function({ player, rating }, index) {
      return (
        <PlayerCard key={player.id} player={player} rating={rating} rank={index + 1}/>
      );
    });

    return (
      <div>
        <FlatButton
          className="pull-right"
          linkButton={true}
          onClick={ this.goToNewGame }
          primary={ true }>
          <FontAwesome icon="plus"/> New Game
        </FlatButton>
        <h2 className="page-header">Leaderboard</h2>
        <div className="leaderboard">
          {leaderboardRows}
        </div>
      </div>
    );
  }
});
