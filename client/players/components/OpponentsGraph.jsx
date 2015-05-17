import React from 'react';
import TinyColor from 'tinycolor2';

import { Doughnut as DoughnutChart } from 'react-chartjs';

import ColorUtil from '../../util/ColorUtil';


export default React.createClass({
  propTypes: {
    currentPlayerId: React.PropTypes.string,
    games: React.PropTypes.array
  },

  getDefaultProps() {
    return { games: [] };
  },

  render() {
    let playerId = this.props.currentPlayerId;
    let opponentNames = this.props.games.reduce(function(names, game) {
      let name = playerId == game.winnerId ? game.loserName : game.winnerName;
      names[name] = (+names[name] || 0) + 1;
      return names;
    }, {});
    let colors = ColorUtil.getDistinctColors(Object.keys(opponentNames).length);
    let data = Object.keys(opponentNames).map(function(name, index){
      return {
        label: name,
        value: opponentNames[name],
        color: colors[index],
        highlight: TinyColor(colors[index]).lighten().toHexString()
      }
    });

    return (
      <DoughnutChart data={data} redraw />
    );
  }

});
