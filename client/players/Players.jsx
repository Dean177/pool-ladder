import React from 'react';
import Reflux from 'reflux';
import { Navigation } from 'react-router';
import { Button } from 'react-bootstrap';

import FontAwesome from '../shared/FontAwesome';
import PlayerList from './components/PlayerList';
import PlayersStore from './../stores/PlayersStore';

import values from '../util';

export default React.createClass({
  mixins: [Navigation, Reflux.listenTo(PlayersStore, "onPlayersUpdate")],
  contextTypes: { router: React.PropTypes.func },

  onPlayersUpdate(updatePlayers) {
    this.setState({
      players: updatePlayers
    });
  },

  getInitialState() {
    return {
      players: {}
    };
  },

  componentDidMount() {
    PlayersStore.getPlayers();
  },

  navigateToAddPlayerSection: function() { this.transitionTo('newPlayer'); },

  render: function() {
    var orderedPlayers = values(this.state.players);
    orderedPlayers.sort(function(playerA, playerB) {
      if (playerA.name < playerB.name) {
        return -1
      } else if (playerA.name > playerB.name) {
        return 1;
      } else {
        return 0;
      }
    });

    return (
      <div>
        <Button
          className="pull-right"
          onClick={ this.navigateToAddPlayerSection }>
          <FontAwesome icon="user-plus"/> New Player
        </Button>
        <h2 className="page-header">Players</h2>
        <PlayerList players={ orderedPlayers }/>
      </div>
    );
  }
});
