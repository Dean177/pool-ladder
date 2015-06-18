import  React from 'react';
import { Navigation } from 'react-router';
import Reflux from 'reflux';
import { Button } from 'react-bootstrap';

import FontAwesome from '../shared/FontAwesome';
import LatestRatingStore from '../stores/LatestRatingStore';
import PlayerCard from '../shared/PlayerCard/PlayerCard';


export default React.createClass({
  mixins:[Navigation, Reflux.connect(LatestRatingStore, 'playerRatings')],
  contextTypes: { router: React.PropTypes.func },

  getInitialState() {
    return { playerRatings: [] };
  },

  componentDidMount() {
    LatestRatingStore.getLatestRatings();
  },

  goToNewGame() { this.transitionTo('newGame'); },

  render() {
    var leaderboardRows = this.state.playerRatings.map(function({ player, rating }, index) {
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
        <div className="Leaderboard">
          {leaderboardRows}
        </div>
      </div>
    );
  }
});
