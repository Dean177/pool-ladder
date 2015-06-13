import React from 'react/addons';
import Reflux from 'reflux';
import { Navigation } from 'react-router';
import { Button, Row, Col } from 'react-bootstrap';

import GameActions from '../actions/GameActions';
import PlayerActions from '../actions/PlayerActions';

import PlayerListStore from '../stores/PlayerListStore';
import PlayerPicker from './components/PlayerPicker';

export default React.createClass({
  mixins: [
    Navigation,
    React.addons.LinkedStateMixin,
    Reflux.connect(PlayerListStore, "players")
  ],

  getInitialState: function() {
    return {
      winner: null,
      loser: null
    };
  },

  onSubmit: function (e) {
    e.preventDefault();
    GameActions.create({
      winnerId: parseInt(this.state.winner.id),
      loserId: parseInt(this.state.loser.id)
    });

    this.transitionTo('leaderboard');
  },

  onCancel: function (e) {
    e.preventDefault();
    this.transitionTo('leaderboard');
  },

  componentDidMount: function() {
    PlayerActions.loadAll();
  },

  render: function() {
    return (
      <div className="newGame">
        <h2 className="page-header">Add Game</h2>
        <form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6}>
              <PlayerPicker
                playerStateLink={ this.linkState('winner')}
                label="Winner"
                players={ this.state.players } />
            </Col>
            <Col md={6}>
              <PlayerPicker
                playerStateLink={ this.linkState('loser')}
                label="Loser"
                players={ this.state.players } />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button type="submit">Add Game</Button>
              <Button onClick={this.onCancel}>Cancel</Button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
});