import React from 'react';

const defaultRating = {newRating: 1000, date: new Date().toISOString()};


export default React.createClass({
  propTypes: {
    playerId: React.PropTypes.number,
    games: React.PropTypes.array,
    ratings: React.PropTypes.array
  },

  render() {
    let playerId = this.props.playerId;
    let mostRecentRating = this.props.ratings.last() || defaultRating;
    let peakRating = this.props.ratings.reduce(function(lastRating, currentRating) {
      return lastRating.newRating > currentRating.newRating ? lastRating : currentRating;
    }, []);
    let lowestRating = this.props.ratings.reduce(function(lastRating, currentRating) {
      return lastRating.newRating < currentRating.newRating ? lastRating : currentRating;
    }, []);

    let gameOutcomes = this.props.games
      .map(function(game) { return game.winnerId === playerId ? 1 : -1; });

    let winLossStreaks = gameOutcomes.reduce(function(acc, currentOutcome, index, gameOutcomes) {
      if (index === 0) {
        return [currentOutcome];
      } else {
        let previousOutcome = gameOutcomes[index - 1];

        if (previousOutcome === currentOutcome) {
          acc.push(acc.last() + currentOutcome);
          return acc;
        } else {
          acc.push(currentOutcome);
          return acc;
        }
      }
    }, []);
    let bestWinStreak = Math.max.apply(null, winLossStreaks);
    let bestLosingStreak = 0 - Math.min.apply(null, winLossStreaks);

    let winLoss = this.props.games.reduce(function(resultCount, game) {
      if(game.winnerId === playerId) {
        resultCount.wins += 1;
      } else {
        resultCount.losses += 1;
      }
      return resultCount;
    }, {wins: 0 , losses:0});

    let winLossRatio = (100 * (winLoss.wins / (winLoss.wins + winLoss.losses))).toFixed(2);

    return (
      <dl className="Stats">
        <dt>Rating</dt>
        <dd>{mostRecentRating.newRating}</dd>

        <dt>Win Rate</dt>
        <dd>{winLossRatio} %</dd>

        <dt>Total Games Played</dt>
        <dd>{this.props.games.length}</dd>

        <dt>Total Wins</dt>
        <dd>{winLoss.wins}</dd>

        <dt>Total Losses</dt>
        <dd>{winLoss.losses}</dd>

        <dt>Longest Win Streak</dt>
        <dd>{bestWinStreak}</dd>

        <dt>Longest Losing Streak</dt>
        <dd>{bestLosingStreak}</dd>

        <dt>Highest Rating</dt>
        <dd>{peakRating.newRating}</dd>

        <dt>Lowest Rating</dt>
        <dd>{lowestRating.newRating}</dd>
      </dl>
    );

  }
});