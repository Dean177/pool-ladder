import React from 'react/addons';
import Reflux from 'reflux';
import { Navigation } from 'react-router';
import { Button, ButtonToolbar, Row, Col } from 'react-bootstrap';

import GameActions from '../actions/GameActions';
import ToastActions from '../actions/ToastActions';

import GamesApi from '../webapi/GamesApi';
import PlayersStore from '../stores/PlayersStore';
import PlayerPicker from './components/PlayerPicker';

export default React.createClass({
  mixins: [
    Navigation,
    React.addons.LinkedStateMixin,
    Reflux.listenTo(PlayersStore, "onPlayersUpdate")
  ],

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

    GamesApi.createGame(newGame)
      .then(this.onCreateCompleted)
      .error(this.onCreateFailed);
  },

  onCancel: function (e) {
    e.preventDefault();
    this.transitionTo('leaderboard');
  },

  onCreateCompleted(game) {
    GameActions.newGame(game);

    let winner = this.state.players[game.winnerId];
    let loser = this.state.players[game.loserId];

    ToastActions.newToast({
      style: 'success',
      body: 'Click to undo',
      title: `${winner.name} beat ${loser.name}`,
      options: {
        closeButton: true,
        timeOut: 50000,
        extendedTimeOut: 2000,
        handleOnClick: () => { this.deleteGame(game) }
      }
    });

    this.transitionTo('leaderboard');
  },

  deleteGame(game) {
    GamesApi.deleteGame(game)
      .then(this.onDeleteSuccess)
      .error(this.onDeleteFailure)
  },

  onDeleteSuccess(gameId) {
    GameActions.deleteGame(gameId);
    ToastActions.newToast({
      style: 'success',
      body: '',
      title: "Successfully removed game.",
      options: {
        timeOut: 50000,
        extendedTimeOut: 2000
      }
    });
  },

  onDeleteFailure(err) {
    ToastActions.newToast({
      style: 'error',
      body: err.message,
      title: "Failed to remove game.",
      options: {
        timeOut: 50000,
        extendedTimeOut: 2000
      }
    });
  },

  render() {
    let players = this.state.players;

    return (
      <div className="newGame">
        <h2 className="page-header">Add Game</h2>
        <form onSubmit={this.onSubmit}>
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
                <Button bsStyle='primary' type="submit">Add Game</Button>
                <Button onClick={this.onCancel}>Cancel</Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
});