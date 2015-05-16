import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router';
import { Navigation } from 'react-router';
import { FlatButton } from 'material-ui';
import { Table } from 'react-bootstrap';

import FontAwesome from '../shared/FontAwesome';

import GamesStore from '../stores/GamesStore';
import GameActions from '../actions/GameActions';

export default React.createClass({
  mixins: [Navigation, Reflux.connect(GamesStore, "recentGames")],

  getInitialState: function() {
    return { recentGames: [] };
  },

  componentDidMount: function() {
    GameActions.getRecent();
  },

  goToNewGame: function() { this.transitionTo('newGame'); },

  render: function() {
    var tableRows = this.state.recentGames.map(function(game) {
      return (
        <tr key={game.id}>
          <td><Link to="player" params={{playerId: game.winnerId}}>{game.winnerId}</Link></td>
          <td><Link to="player" params={{playerId: game.loserId}}>{game.loserId}</Link></td>
          <td>{game.playedOn}</td>
        </tr>
      );
    });

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

        <Table striped responsive>
          <thead>
            <tr>
              <th>Winner</th>
              <th>Loser</th>
              <th>PlayedOn</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </Table>
      </div>
    );
  }
});


