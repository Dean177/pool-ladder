import React from 'react';

export default React.createClass({
  propTypes: {
    playerId: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      playerId: 0
    }
  },

  render() {
    return <img className="ProfileImage" src={`https://github.com/identicons/${this.props.playerId}.png`}/>
  }
});