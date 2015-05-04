var React = require('react');
var Reflux = require('reflux');

var GamesStore = require('../stores/GamesStore');
var GameActions = require('../actions/GameActions');

module.exports = React.createClass({
  mixins: [Reflux.connect(GamesStore, "recentGames")],

  getInitialState: function() {
    return { recentGames: {} };
  },

  componentDidMount: function() {
    GameActions.getRecent();
  },

  render: function () {
    return (
      <div>
        <h1 className="page-header">Recent Games</h1>
        <pre>{ JSON.stringify(this.state.recentGames) }</pre>
      </div>
    );
  }
});


