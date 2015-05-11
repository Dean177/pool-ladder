import React from 'react';
import Reflux from 'reflux';
import Router from 'react-router';
import PlayerActions from './../actions/PlayerActions';
import CurrentPlayerDetailStore from './../stores/PlayerDetailStore';

var { State, Navigation } = Router;

var Player = React.createClass({
  mixins: [State, Navigation, Reflux.connect(CurrentPlayerDetailStore, "player")],

  getInitialState: function() {
    return { player: {} };
  },

  componentDidMount: function() {
    PlayerActions.loadDetail(this.getParams().playerId);
  },

  render: function () {
    return (
      <div>
        <h1>{this.state.player.name}</h1>
      </div>
    );
  }
});

module.exports = Player;
