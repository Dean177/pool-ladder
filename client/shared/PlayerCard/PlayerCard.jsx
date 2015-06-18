import React from 'react';
import { Link } from 'react-router';

import ProfileImage from '../ProfileImage/ProfileImage';
import PlayerRank from '../PlayerRank';

export default React.createClass({

  propTypes: {
    player: React.PropTypes.object
  },

  render: function () {
    let player = this.props.player;

    return (
      <div className="PlayerCard">
        <div className="PlayerCardContents">
          <Link to="player" className="image" params={{playerId: player.id}}>
              <ProfileImage playerId={player.id} />
          </Link>
          <div className="details">
              <div className="name">{ player.name }</div>
              <div className="rating">{ player.rating }</div>
          </div>
          <div className="rank">#{player.rank}</div>
        </div>
      </div>
    );
  }
});

