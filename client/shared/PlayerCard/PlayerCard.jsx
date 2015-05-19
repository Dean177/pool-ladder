import React from 'react';
import { Link } from 'react-router';
import { Paper } from 'material-ui';

export default React.createClass({

  render: function () {
    var { player, rating } = this.props;

    rating = rating || { newRating: 1000, change: 0};

    var playerImageUrl = player.image || "/assets/images/players/goat.jpg";

    return (
      <Paper zDepth={2} className="PlayerCard" innerClassName="PlayerCardContents">
        <Link to="player" className="image" params={{playerId: player.id}}>
            <img src={ playerImageUrl } />
        </Link>
        <div className="details">
            <div className="name">{ player.name }</div>
            <div className="rating">rating: { rating.newRating }</div>
            <div className="last-change">last change: { rating.change }</div>
        </div>
        <div className="rank">{'#'} 2</div>
      </Paper>
    );
  }
});

