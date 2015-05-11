import React from 'react';
import { Link } from 'react-router';
import { Paper } from 'material-ui';

export default React.createClass({

  render: function () {
    var player = this.props.player;
    var playerImageUrl = player.image || "/assets/images/players/goat.jpg";

    return (
      <Paper zDepth={2} className="PlayerCard" innerClassName="PlayerCardContents">
        <Link to="player" className="image" params={{playerId: player.id}}>
            <img src={ playerImageUrl } />
        </Link>
        <div className="details">
            <div className="name">{ player.name }</div>
            <div className="rating">rating: { player.rating }</div>
            <div className="win-rate"><span>win rate: 75%</span></div>
        </div>
        <div className="rank">{'#'} { player.rank }</div>
      </Paper>
    );
  }
});

