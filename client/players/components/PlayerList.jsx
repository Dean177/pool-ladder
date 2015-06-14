import React from 'react';
import {Row,Col} from 'react-bootstrap';
import PlayerCard from '../../shared/PlayerCard/PlayerCard';

export default React.createClass({
  propTypes: {
    players: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      players: {}
    }
  },

  render() {
    var playerDetailCards = Object.values(this.props.players).map(function (player) {
      return <PlayerCard key={player.id} player={player} />;
    });

    let middle = Math.round(playerDetailCards.length / 2);
    let firstCol = playerDetailCards.slice(0, middle);
    let secondCol = playerDetailCards.slice(middle, playerDetailCards.length);

    if (this.props.players.length === 0) {
      return <h2 className="text-muted">No players</h2>;
    } else {
      return (
        <Row className="PlayerList">
          <Col md={6}>
            {firstCol}
          </Col>
          <Col md={6}>
            {secondCol}
          </Col>
        </Row>
      );
    }
  }
});
