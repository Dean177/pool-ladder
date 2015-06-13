import React from 'react';
import { Input } from 'react-bootstrap';

export default React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  propTypes: {
    playerStateLink: React.PropTypes.any,
    label: React.PropTypes.string,
    players: React.PropTypes.array
  },

  render: function() {

    var options = this.props.players.map(function(player) {
      return (
        <option
          key={player.id}
          value={player}>
          {player.name}
        </option>
      );
    });

    return (
      <Input type='select' label={this.props.label} valueLink={this.props.playerStateLink}>
        <option>...</option>
        {options}
      </Input>
    );
  }
});
