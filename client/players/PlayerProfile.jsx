import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';
import Reflux from 'reflux';
import { State, Navigation } from 'react-router';

import PlayerActions from './../actions/PlayerActions';
import RatingActions from './../actions/RatingActions';

import ProfileStore from './../stores/PlayerProfileStore';
import RatingsStore from './../stores/PlayerRatingsStore';
import RankingsStore from './../stores/RankingsStore';
import GamesStore from './../stores/PlayerGamesStore';

import ProfileImage from '../shared/ProfileImage/ProfileImage';
import PlayerRank from './components/PlayerRank';
import PlayerStats from './components/PlayerStats';
import RatingGraph from './components/RatingsGraph';
import OpponentGraph from './components/OpponentsGraph';
import GameList from './components/GameList';

const defaultRating = {newRating: 1000, date: new Date().toISOString()};

export default React.createClass({
  contextTypes: { router: React.PropTypes.func },
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
      ratings: [defaultRating],
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

    return (
      <div className="PlayerProfile">
        <Row>
          <Col lg={9}>
            <Row>
              <Col md={8}>
                <h2 className="">Rating History</h2>
                <RatingGraph ratings={this.state.ratings} />
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
              <h1 className="Ranking">#<PlayerRank playerId={currentPlayerId} /></h1>
            </div>
            <div className="PlayerStats">
              <h1 className="Name">{this.state.player.name}</h1>
              <PlayerStats playerId={currentPlayerId} games={this.state.games} ratings={this.state.ratings} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
});
