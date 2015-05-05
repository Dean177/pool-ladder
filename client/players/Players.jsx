var React = require('react');
var Reflux = require('reflux');
var Navigation = require('react-router').Navigation;
var FontAwesome = require('../shared/FontAwesome');
var FlatButton = require('material-ui').FlatButton;

var PlayerList = require('./components/PlayerList');
var PlayerListStore = require('./../stores/PlayerListStore');
var PlayerActions = require('./../actions/PlayerActions');

module.exports = React.createClass({
  mixins: [Navigation, Reflux.connect(PlayerListStore, "players")],

  getInitialState: function() {
    return { players: {} };
  },

  componentDidMount: function() {
    PlayerActions.loadAll();
  },

  navigateToAddPlayerSection: function() { this.transitionTo('newPlayer'); },

  render: function() {
    return (
      <div>
        <FlatButton
          className="pull-right"
          linkButton={true}
          onClick={ this.navigateToAddPlayerSection }
          primary={ true }>
          <FontAwesome icon="user-plus"/> Add Player
        </FlatButton>
        <h1 className="page-header">Players</h1>
        <PlayerList players={ this.state.players }/>
      </div>
    );
  }
});
