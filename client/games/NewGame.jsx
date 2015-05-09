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
      winnerId: this.state.winnerId,
      loserId: this.state.loserId
    });

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
              <p>Winner</p>
              <PlayerPicker idStateLink={ this.linkState('winnerId')} players={ this.state.players } />
            </Col>
            <Col md={6}>
              <p>Loser</p>
              <PlayerPicker idStateLink={ this.linkState('loserId')} players={ this.state.players } />
            </Col>
          </Row>
          <Row>
            <RaisedButton label="Add Game" secondary={ true } />

            <FlatButton
              label="Cancel"
              primary={ true }
              />
          </Row>
        </form>
      </div>
    );
  }
});