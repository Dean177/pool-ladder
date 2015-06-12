import React from 'react';
import Reflux from 'reflux';
import { Navigation } from 'react-router';
import { Button } from 'react-bootstrap';

import FontAwesome from '../shared/FontAwesome';
import PlayerList from './components/PlayerList';
import PlayerListStore from './../stores/PlayerListStore';
import PlayerActions from './../actions/PlayerActions';

export default React.createClass({
  mixins: [Navigation, Reflux.connect(PlayerListStore, "players")],

  componentDidMount: function() {
    PlayerActions.loadAll();
  },

  navigateToAddPlayerSection: function() { this.transitionTo('newPlayer'); },

  render: function() {
    return (
      <div>
        <Button
          className="pull-right"
          linkButton={ true }
          onClick={ this.navigateToAddPlayerSection }
          primary={ true }>
          <FontAwesome icon="user-plus"/> Add Player
        </Button>
        <h2 className="page-header">Players</h2>
        <PlayerList players={ this.state.players }/>
      </div>
    );
  }
});
