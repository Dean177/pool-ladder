var React = require('react');
var Router = require('react-router');

var Player = React.createClass({
  mixins: [Router.State],

  // TODO: lookup player in store and retrieve/display data.

  render: function () {
    return (
      <div>
        <h1>Player {this.getParams().playerID}</h1>
        <p>Put user info here...</p>
      </div>
    );
  }
});

module.exports = Player;
