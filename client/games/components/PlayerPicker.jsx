import React from 'react';

export default React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  propTypes: {
    players: React.PropTypes.array,
    idStateLink: React.PropTypes.any
  },

  render: function() {

    var options = this.props.players.map(function(player) {
      return (
        <option
          key={player.id}
          value={player.id}>
          {player.name}
        </option>
      );
    });

    return (
      <select valueLink={this.props.idStateLink}>{options}</select>
    );
  }
});
