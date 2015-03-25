var React = require('react');
var PlayerCard = require('./PlayerCard/PlayerCard');

module.exports = React.createClass({
  render: function () {
    var players = this.props.players || [];
    if (!players.length) {
      return <h2>No players</h2>;
    }

    var playerList = players.map(function (player) {
      return <PlayerCard key={player.id} player={player} />;
    });

    return (
      <div>{playerList}</div>
    );
  }
});