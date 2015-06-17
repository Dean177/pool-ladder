import React from 'react/addons';
import { Input } from 'react-bootstrap';
import values from '../../util';
const LinkedStateMixin = React.addons.LinkedStateMixin;


export default React.createClass({
  mixins: [LinkedStateMixin],

  propTypes: {
    idStateLink: React.PropTypes.any,
    label: React.PropTypes.string,
    players: React.PropTypes.object
  },

  render() {
    var options = values(this.props.players).map(function(player) {
      return (
        <option
          key={player.id}
          value={player.id}>
          {player.name}
        </option>
      );
    });

    return (
      <Input type='select' label={this.props.label} valueLink={this.props.idStateLink}>
        <option>...</option>
        {options}
      </Input>
    );
  }
});
