import React from 'react';
import Reflux from 'reflux';
import { Navigation } from 'react-router';
import { FlatButton } from 'material-ui';

import FontAwesome from '../shared/FontAwesome';

import GamesStore from '../stores/GamesStore';
import GameActions from '../actions/GameActions';

export default React.createClass({
  mixins: [Navigation, Reflux.connect(GamesStore, "recentGames")],

  getInitialState: function() {
    return { recentGames: {} };
  },

  componentDidMount: function() {
    GameActions.getRecent();
  },

  goToNewGame: function() { this.transitionTo('newGame'); },

  render: function() {
    return (
      <div className="recentGames">
        <FlatButton
          className="pull-right"
          linkButton={true}
          onClick={ this.goToNewGame }
          primary={ true }>
          <FontAwesome icon="user-plus"/> New Game
        </FlatButton>
        <h2 className="page-header">Recent Games</h2>

        <pre>{ JSON.stringify(this.state.recentGames) }</pre>
      </div>
    );
  }
});


