var React = require('react');
var PlayerCard = require('./PlayerCard/PlayerCard');
var PlayerListStore = require('../../stores/PlayerListStore');

module.exports = React.createClass({
  render: function() {
    var playerList = this.props.players;
    if (!playerList.length) {
      return <h2>No players</h2>;
    }

    var playerDetailCards = playerList.map(function (player) {
      return <PlayerCard key={player.id} player={player} />;
    });

    return (
      <div className="playerList">{playerDetailCards}</div>
    );
  }

});
