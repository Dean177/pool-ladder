import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';
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
  contextTypes: { router: React.PropTypes.func },


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

    var last30Ratings;
    if (this.state.ratings.length <= 30) {
      last30Ratings = this.state.ratings;
    } else {
      let ratings = this.state.ratings;
      last30Ratings = ratings.slice(ratings.length - 30, ratings.length)
    }

    let mostRecentRating = this.state.ratings.last();

    return (
      <div className="PlayerProfile">
        <Row>
          <Col lg={9}>
            <Row>
              <Col md={8}>
                <h2 className="">Rating History</h2>
                <RatingGraph ratings={last30Ratings} />
              </Col>
              <Col md={4}>
                <h2 className="">Plays Against</h2>
                <OpponentGraph games={this.state.games} currentPlayerId={currentPlayerId} />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h2 className="">Recent Games</h2>
                <GameList games={this.state.games} currentPlayerId={currentPlayerId} />
              </Col>
            </Row>
          </Col>
          <Col lg={3} className="PlayerColumn">
            <div className="image-container">
              <ProfileImage className="image" playerId={currentPlayerId} />
              <h1 className="Ranking">#15</h1>
            </div>
            <div className="PlayerStats">
              <h1 className="Name">{this.state.player.name}</h1>
              <dl className="Stats">
                <dt>Rating</dt>
                <dd>{mostRecentRating.newRating}</dd>

                <dt>Win Rate</dt>
                <dd>{winLossRatio} %</dd>

                <dt>Total Games Played</dt>
                <dd>{this.state.games.length}</dd>

                <dt>Total Wins</dt>
                <dd>{winLoss.wins}</dd>

                <dt>Total Losses</dt>
                <dd>{winLoss.losses}</dd>

                <dt>Longest Win Streak</dt>
                <dd>{bestWinStreak}</dd>

                <dt>Longest Losing Streak</dt>
                <dd>{bestLosingStreak}</dd>

                <dt>Highest Rating</dt>
                <dd>{peakRating.newRating}</dd>

                <dt>Lowest Rating</dt>
                <dd>{lowestRating.newRating}</dd>
              </dl>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
});
