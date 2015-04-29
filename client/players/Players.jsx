import React from 'react';
import { Navigation } from 'react-router';
import { ListenerMixin } from 'reflux';
import FontAwesome from '../shared/FontAwesome';
import { FlatButton } from 'material-ui';

import PlayerList from './components/PlayerList';
import PlayerListStore from './PlayerListStore';

module.exports = React.createClass({
  mixins: [Navigation, ListenerMixin],

  getInitialState() {
    return {
      isLoading: PlayerListStore.isLoading,
      players: PlayerListStore.getInitialState()
    }
  },

  navigateToAddPlayerSection() { this.transitionTo('newPlayer'); },

  render() {
    return (
      <div>
        <FlatButton
          className="pull-right"
          linkButton={true}
          onClick={ this.navigateToAddPlayerSection }
          primary={true}>
          <FontAwesome icon="user-plus"/> Add Player
        </FlatButton>
        <h1 className="page-header">Players</h1>
        <PlayerList players={this.state.players} />
      </div>
    );
  }
});
