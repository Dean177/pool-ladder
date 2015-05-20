import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Reflux from 'reflux';
import Router from 'react-router';
var { State, Navigation } = Router;

import PlayerActions from './../actions/PlayerActions';
import ProfileStore from './../stores/PlayerProfileStore';
import RatingsStore from './../stores/PlayerRatingsStore';
import GamesStore from './../stores/PlayerGamesStore';

import RatingGraph from './components/RatingGraph';
import OpponentGraph from './components/OpponentsGraph';
import GameList from './components/GameList';

export default React.createClass({
  mixins: [
    State,
    Navigation,
    Reflux.connect(ProfileStore, "player"),
    Reflux.connect(RatingsStore, "ratings"),
    Reflux.connect(GamesStore, "games")
  ],

  getInitialState: function() {
    return {
      player: {},
      ratings: [{newRating: 1000, date: new Date().toISOString()}],
      games: []
    };
  },

  componentDidMount: function() {
    PlayerActions.loadDetail(this.getParams().playerId);
  },

  // https://github.com/rackt/react-router/blob/master/docs/guides/overview.md#important-note-about-dynamic-segments
  componentWillReceiveProps: function() {
    PlayerActions.loadDetail(this.getParams().playerId);
  },

  render: function () {
    let currentPlayer = this.getParams().playerId;
    let peakRating = this.state.ratings.reduce(function(lastRating, currentRating) {
      return lastRating.newRating > currentRating.newRating ? lastRating : currentRating;
    });
    let lowestRating = this.state.ratings.reduce(function(lastRating, currentRating) {
      return lastRating.newRating < currentRating.newRating ? lastRating : currentRating;
    });

    return (
      <div>
        <h1 className="page-header">{this.state.player.name}</h1>
        <Row>
          <Col md={7}>
            <h3>Rating History</h3>
            <RatingGraph ratings={this.state.ratings} />
          </Col>
          <Col md={5}>
            <h3>Stats</h3>
            <Row>
              <Col md={12}>
                <dl className="dl-horizontal">
                  <dt>Win Rate</dt><dd>???</dd>
                  <dt>Total Games Played</dt><dd>{this.state.games.length}</dd>
                  <dt>Highest Rating</dt><dd>{peakRating.newRating}</dd>
                  <dt>Lowest Rating</dt><dd>{lowestRating.newRating}</dd>
                  <dt>Longest Win Streak</dt><dd>???</dd>
                  <dt>Longest Losing Streak</dt><dd>???</dd>
                </dl>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h3>Played Against</h3>
                <OpponentGraph games={this.state.games} currentPlayerId={currentPlayer} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3>Recent Games</h3>
            <GameList games={this.state.games} currentPlayerId={currentPlayer} />
          </Col>
        </Row>
      </div>
    );
  }
});
