import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  propTypes: {
    currentPlayerId: React.PropTypes.string,
    games: React.PropTypes.array
  },

  getDefaultProps() {
    return {
      games: []
    }
  },

  render() {
    let currentPlayerId = this.props.currentPlayerId;
    let gamesHistory = this.props.games.map(function(game) {
      let isWinner = currentPlayerId == game.winnerId;
      let gameDescription = isWinner ? "Defeated" : "Lost to";
      let opponentId = isWinner ? game.loserId : game.winnerId;
      let opponentName = isWinner ? game.loserName : game.winnerName;
      let opponentLink = (<Link to="player" className="image" params={{playerId: opponentId}}>{opponentName}</Link>);

      return (<li key={game.id}>{gameDescription} {opponentLink} on {new Date(game.playedOn).toDateString()} </li>);
    });

    return (
      <ul className="game-list">
        {gamesHistory}
      </ul>
    );
  }
});
