import React from 'react';

import PlayerCard from './PlayerCard/PlayerCard';
import values from '../util';


export default React.createClass({
  propTypes: { players: React.PropTypes.array },

  getDefaultProps() { return { players: [] } },

  render() {
    var playerDetailCards = this.props.players.map(function (player) {
      return <PlayerCard key={player.id} player={player} />;
    });

    if (this.props.players.length === 0) {
      return (<h2 className="text-muted">No players</h2>);
    } else {
      return (
        <div className="PlayerList">{playerDetailCards}</div>
      );
    }
  }
});
