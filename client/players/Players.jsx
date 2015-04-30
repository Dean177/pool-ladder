var React = require('react');
var Navigation = require('react-router').Navigation;
var ListenerMixin = require('reflux').ListenerMixin ;
var FontAwesome = require('../shared/FontAwesome');
var FlatButton = require('material-ui').FlatButton;

var PlayerList = require('./components/PlayerList');
var PlayerListStore = require('./PlayerListStore');

module.exports = React.createClass({
  mixins: [Navigation, ListenerMixin],

  getInitialState: function() {
    return {
      isLoading: PlayerListStore.isLoading,
      players: PlayerListStore.getInitialState()
    };
  },

  navigateToAddPlayerSection: function() { this.transitionTo('newPlayer'); },

  render: function() {
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
