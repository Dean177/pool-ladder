import React from 'react';
import { Link } from 'react-router';

import ProfileImage from '../ProfileImage/ProfileImage';

export default React.createClass({

  propTypes: {
    player: React.PropTypes.object,
    rating: React.PropTypes.object,
    rank: React.PropTypes.number
  },

  render: function () {
    var { player, rating, rank } = this.props;

    rating = rating || { newRating: 1000, change: 0};

    return (
      <div className="PlayerCard">
        <div className="PlayerCardContents">
          <Link to="player" className="image" params={{playerId: player.id}}>
              <ProfileImage playerId={this.props.player.id} />
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

