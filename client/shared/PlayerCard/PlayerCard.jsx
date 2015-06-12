import React from 'react';
import { Link } from 'react-router';

export default React.createClass({

  propTypes: {
    player: React.PropTypes.object,
    rating: React.PropTypes.object,
    rank: React.PropTypes.number
  },

  render: function () {
    var { player, rating, rank } = this.props;

    rating = rating || { newRating: 1000, change: 0};

    var playerImageUrl = player.image || "/assets/images/players/goat.jpg";

    return (
      <div className="PlayerCard">
        <div className="PlayerCardContents">
          <Link to="player" className="image" params={{playerId: player.id}}>
              <img src={ playerImageUrl } />
          </Link>
          <div className="details">
              <div className="name">{ player.name }</div>
              <div className="rating">rating: { rating.newRating }</div>
          </div>
          <div className="rank">{'#'} {rank}</div>
        </div>
      </div>
    );
  }
});

