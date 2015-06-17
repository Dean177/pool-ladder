import React from 'react/addons';
import Reflux from 'reflux';
import { Navigation } from 'react-router';
import { Button, ButtonToolbar, Row, Col } from 'react-bootstrap';

import GameActions from '../actions/GameActions';
import GamesApi from '../webapi/GamesApi';
import PlayersStore from '../stores/PlayersStore';
import PlayerPicker from './components/PlayerPicker';

const LinkedStateMixin = React.addons.LinkedStateMixin;

export default React.createClass({
  mixins: [GamesApi, Navigation, LinkedStateMixin, Reflux.listenTo(PlayersStore, "onPlayersUpdate")],
  contextTypes: { router: React.PropTypes.func },

  onPlayersUpdate(updatePlayers) {
    this.setState({
      players: updatePlayers
    });
  },

  getInitialState() {
    return {
      players: {},
      winner: {name: ""},
      loser: {name: ""}
    };
  },

  componentDidMount() {
    PlayersStore.getPlayers();
  },

  onSubmit: function (e) {
    e.preventDefault();
    let newGame = {
      winnerId: parseInt(this.state.winner),
      loserId: parseInt(this.state.loser)
    };

    this.createGame(newGame)
      .then(this.onCreateCompleted)
      .error(this.onCreateFailed);
  },

  onCancel: function (e) {
    e.preventDefault();
    this.transitionTo('leaderboard');
  },

  onCreateCompleted(game) {
    game.winner = this.state.players[game.winnerId];
    game.loser = this.state.players[game.loserId];
    GameActions.newGame(game);
    this.transitionTo('leaderboard');
  },

  render() {
    let players = this.state.players;

    return (
      <div className="newGame">
        <h2 className="page-header">Add Game</h2>
          <Row>
            <Col md={6}>
              <PlayerPicker
                idStateLink={ this.linkState('winner')}
                label="Winner"
                players={ players } />
            </Col>
            <Col md={6}>
              <PlayerPicker
                idStateLink={ this.linkState('loser')}
                label="Loser"
                players={ players } />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ButtonToolbar>
                <Button bsStyle='primary' onClick={this.onSubmit} className="submit-game">Add Game</Button>
                <Button onClick={this.onCancel} className="cancel-game">Cancel</Button>
              </ButtonToolbar>
            </Col>
          </Row>
      </div>
    );
  }
});