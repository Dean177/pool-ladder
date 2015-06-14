import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Reflux from 'reflux';
import { State, Navigation } from 'react-router';

import PlayerActions from './../actions/PlayerActions';
import ProfileStore from './../stores/PlayerProfileStore';
import RatingsStore from './../stores/PlayerRatingsStore';
import GamesStore from './../stores/PlayerGamesStore';

import ProfileImage from '../shared/ProfileImage/ProfileImage';
import RatingGraph from './components/RatingsGraph';
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
    PlayerActions.loadPlayerDetail(this.getParams().playerId);
  },

  // https://github.com/rackt/react-router/blob/master/docs/guides/overview.md#important-note-about-dynamic-segments
  componentWillReceiveProps: function() {
    PlayerActions.loadPlayerDetail(this.getParams().playerId);
  },

  render: function () {
    let currentPlayerId = Number.parseInt(this.getParams().playerId);

    let peakRating = this.state.ratings.reduce(function(lastRating, currentRating) {
      return lastRating.newRating > currentRating.newRating ? lastRating : currentRating;
    });
    let lowestRating = this.state.ratings.reduce(function(lastRating, currentRating) {
      return lastRating.newRating < currentRating.newRating ? lastRating : currentRating;
    });

    let gameOutcomes = this.state.games
      .map(function(game) { return game.winnerId === currentPlayerId ? 1 : -1; });

    let winLossStreaks = gameOutcomes.reduce(function(acc, currentOutcome, index, gameOutcomes) {
          if (index === 0) {
            return [currentOutcome];
          } else {
            let previousOutcome = gameOutcomes[index - 1];

            if (previousOutcome === currentOutcome) {
              acc.push(acc.last() + currentOutcome);
              return acc;
            } else {
              acc.push(currentOutcome);
              return acc;
            }
          }
      }, []);
    let bestWinStreak = Math.max.apply(null, winLossStreaks);
    let bestLosingStreak = 0 - Math.min.apply(null, winLossStreaks);

    let winLoss = this.state.games.reduce(function(resultCount, game) {
      if(game.winnerId === currentPlayerId) {
        resultCount.wins += 1;
      } else {
        resultCount.losses += 1;
      }
      return resultCount;
    }, {wins: 0 , losses:0});

    let winLossRatio = (100 * (winLoss.wins / (winLoss.wins + winLoss.losses))).toFixed(2);

    return (
      <div>
        <h1 className="page-header">{this.state.player.name}</h1>
        <Row>
          <Col md={7}>
            <h3>Rating History</h3>
            <RatingGraph ratings={this.state.ratings} />
          </Col>
          <Col md={5}>
            <ProfileImage playerId={currentPlayerId} />
            <h3>Stats</h3>
            <Row>
              <Col md={12}>
                <dl className="dl-horizontal">
                  <dt>Win Rate</dt><dd>{winLossRatio} % ({winLoss.wins} / {winLoss.losses})</dd>
                  <dt>Total Games Played</dt><dd>{this.state.games.length}</dd>
                  <dt>Highest Rating</dt><dd>{peakRating.newRating}</dd>
                  <dt>Lowest Rating</dt><dd>{lowestRating.newRating}</dd>
                  <dt>Longest Win Streak</dt><dd>{bestWinStreak}</dd>
                  <dt>Longest Losing Streak</dt><dd>{bestLosingStreak}</dd>
                </dl>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h3>Played Against</h3>
                <OpponentGraph games={this.state.games} currentPlayerId={currentPlayerId} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3>Recent Games</h3>
            <GameList games={this.state.games} currentPlayerId={currentPlayerId} />
          </Col>
        </Row>
      </div>
    );
  }
});
