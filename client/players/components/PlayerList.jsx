import React from 'react';
import {Row,Col} from 'react-bootstrap';

import PlayerCard from '../../shared/PlayerCard/PlayerCard';
import values from '../../util';


export default React.createClass({
  propTypes: { players: React.PropTypes.array },

  getDefaultProps() { return { players: [] } },

  render() {
    var playerDetailCards = this.props.players.map(function (player) {
      return <PlayerCard key={player.id} player={player} />;
    });

    let firstThird = Math.round(playerDetailCards.length / 3);
    let secondThird = Math.round((playerDetailCards.length / 3 ) * 2);
    let firstCol = playerDetailCards.slice(0, firstThird);
    let secondCol = playerDetailCards.slice(firstThird, secondThird);
    let thirdCol = playerDetailCards.slice(secondThird, playerDetailCards.length);

    if (this.props.players.length === 0) {
      return (<h2 className="text-muted">No players</h2>);
    } else {
      return (
        <Row className="PlayerList">
          <Col md={4}>
            {firstCol}
          </Col>
          <Col md={4}>
            {secondCol}
          </Col>
          <Col md={4}>
            {thirdCol}
          </Col>
        </Row>
      );
    }
  }
});
