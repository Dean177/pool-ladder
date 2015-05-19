import React from 'react/addons';
import Reflux from 'reflux';
import { Navigation } from 'react-router';
import { RaisedButton, FlatButton } from 'material-ui';
import { Row, Col } from 'react-bootstrap';

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
      winnerId: null,
      loserId: null
    };
  },

  onSubmit: function (e) {
    e.preventDefault();
    GameActions.create({
      winnerId: parseInt(this.state.winnerId),
      loserId: parseInt(this.state.loserId)
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
    // TODO add a default option for these selects
    return (
      <div className="newGame">
        <h2 className="page-header">Add Game</h2>
        <form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6}>
              <PlayerPicker
                idStateLink={ this.linkState('winnerId')}
                label="Winner"
                players={ this.state.players } />
            </Col>
            <Col md={6}>
              <PlayerPicker
                idStateLink={ this.linkState('loserId')}
                label="Loser"
                players={ this.state.players } />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <RaisedButton label="Add Game" type="submit" secondary={ true } />
              <FlatButton label="Cancel" onClick={this.onCancel} primary={ true } />
            </Col>
          </Row>
        </form>
      </div>
    );
  }
});