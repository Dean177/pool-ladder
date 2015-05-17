import React from 'react';
import Reflux from 'reflux';
import Router from 'react-router';
var { State, Navigation } = Router;

import PlayerActions from './../actions/PlayerActions';
import ProfileStore from './../stores/PlayerProfileStore';
import RatingsStore from './../stores/PlayerRatingsStore';
import GamesStore from './../stores/PlayerGamesStore';

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
      ratings: [],
      games: []
    };
  },

  componentDidMount: function() {
    PlayerActions.loadDetail(this.getParams().playerId);
  },

  render: function () {
    return (
      <div>
        <h1 className="page-header">{this.state.player.name}</h1>
        <pre>{JSON.stringify(this.state.ratings)}</pre>
        <pre>{JSON.stringify(this.state.games)}</pre>
      </div>
    );
  }
});
