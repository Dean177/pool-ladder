import React from 'react';
import PlayerCard from './PlayerCard/PlayerCard';
import PlayerListStore from '../PlayerListStore'

const PlayerList = React.createClass({

  render() {
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

export default PlayerList