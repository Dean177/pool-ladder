import  React from 'react';
import { Navigation } from 'react-router';
import Reflux from 'reflux';
import { Button } from 'react-bootstrap';

import FontAwesome from '../shared/FontAwesome';
import LatestRatingStore from '../stores/LatestRatingStore';
import PlayerList from '../shared/PlayerList';


export default React.createClass({
  mixins:[Navigation, Reflux.connect(LatestRatingStore, 'players')],
  contextTypes: { router: React.PropTypes.func },

  getInitialState() {
    return {
      players: []
    }
  },

  componentDidMount() {
    LatestRatingStore.getLatestRatings();
  },

  goToNewGame() { this.transitionTo('newGame'); },

  render: function() {
    let players = this.state.players;

    players.sort(function(playerA, playerB) {
      if (playerA.rank < playerB.rank) {
        return -1
      } else if (playerA.rank > playerB.rank) {
        return 1;
      } else {
        return 0;
      }
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
          <PlayerList players={ players }/>
        </div>
      </div>
    );
  }
});
