var React = require('react');
var PlayerCard = require('./PlayerCard/PlayerCard');
var PlayerListStore = require('../PlayerListStore');

module.exports = React.createClass({

  render: function() {
    var players = this.props.players || [];
    if (!players.length) {
      console.log(players);
      return <h2>No players</h2>;
    }

    var playerList = players.map(function (player) {
      return <PlayerCard key={player.id} player={player} />;
    });

    return (
      <div className="playerList">{playerList}</div>
    );
  }

});
