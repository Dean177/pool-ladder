import React from 'react';
import PlayerCard from './PlayerCard/PlayerCard';

export default React.createClass({
  propTypes: {
    players: React.PropTypes.array
  },

  render() {
    var playerDetailCards = this.props.players.map(function (player) {
      return <PlayerCard key={player.id} player={player} />;
    });

    if (!playerDetailCards.length) {
      return <h2 className="text-muted">No players</h2>;
    } else {
      return (
        <div className="playerList">{ playerDetailCards }</div>
      );
    }
  }
});
