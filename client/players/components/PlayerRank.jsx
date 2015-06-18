import React from 'react';
import Reflux from 'reflux';

import RankingsStore from '../../stores/RankingsStore';


export default React.createClass({
  mixins: [Reflux.connect(RankingsStore, "rankings")],
  propTypes: { playerId: React.PropTypes.number },

  render() {
    var ranking;
    if (this.state.rankings && Object.keys(this.state.rankings).length > 0) {
      ranking = this.state.rankings[this.props.playerId];
    } else {
      ranking = "";
    }

    return (<span className="PlayerRank">{ranking}</span>);
  }
});
