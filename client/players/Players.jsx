import React from 'react';
import Reflux from 'reflux';
import { Navigation } from 'react-router';
import { Button, Row, Col } from 'react-bootstrap';

import FontAwesome from '../shared/FontAwesome';
import PlayerList from './../shared/PlayerList';
import LatestRatingStore from './../stores/LatestRatingStore';

export default React.createClass({
  contextTypes: { router: React.PropTypes.func },
  mixins:[Navigation, Reflux.connect(LatestRatingStore, 'players')],

  getInitialState() {
    return {
      players: []
    }
  },

  componentDidMount() {
    LatestRatingStore.getLatestRatings();
  },

  navigateToAddPlayerSection: function() { this.transitionTo('newPlayer'); },

  render: function() {
    let players = this.state.players;

    players.sort(function(playerA, playerB) {
      if (playerA.name < playerB.name) {
        return -1
      } else if (playerA.name > playerB.name) {
        return 1;
      } else {
        return 0;
      }
    });

    let firstThird = Math.round(players.length / 3);
    let secondThird = Math.round((players.length / 3 ) * 2);
    let firstCol = players.slice(0, firstThird);
    let secondCol = players.slice(firstThird, secondThird);
    let thirdCol = players.slice(secondThird, players.length);

    return (
      <div>
        <Button
          className="pull-right"
          onClick={ this.navigateToAddPlayerSection }>
          <FontAwesome icon="user-plus"/> New Player
        </Button>
        <h2 className="page-header">Players</h2>
        <Row >
          <Col md={4}>
            <PlayerList players={firstCol}/>
          </Col>
          <Col md={4}>
            <PlayerList players={secondCol} />
          </Col>
          <Col md={4}>
            <PlayerList players={thirdCol} />
          </Col>
        </Row>

      </div>
    );
  }
});
