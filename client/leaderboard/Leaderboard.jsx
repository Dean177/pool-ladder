import  React from 'react';
import { Navigation } from 'react-router';
import Reflux from 'reflux';
import { Button } from 'react-bootstrap';

import FontAwesome from '../shared/FontAwesome';
import LatestRatingStore from '../stores/LatestRatingStore';
import PlayerCard from '../shared/PlayerCard/PlayerCard';


export default React.createClass({
  mixins:[Navigation, Reflux.listenTo(LatestRatingStore, 'onPlayerRatings')],

  onPlayerRatings(ratings) {
    this.setState({
      playerRatings: ratings
    })
  },

  getInitialState() {
    return { playerRatings: [] };
  },

  componentDidMount() {
    LatestRatingStore.getLatestRatings();
  },

  goToNewGame() { this.transitionTo('newGame'); },

  render() {
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
        <Button
          bsStyle='default'
          className="pull-right"
          onClick={ this.goToNewGame }>
          <FontAwesome icon="plus"/> New Game
        </Button>
        <h2 className="page-header">Leaderboard</h2>
        <div className="leaderboard">
          {leaderboardRows}
        </div>
      </div>
    );
  }
});
