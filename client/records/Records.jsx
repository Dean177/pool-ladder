import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router';
import {TabbedArea, TabPane, Row, Col, Table} from 'react-bootstrap';

import RecordsStore from '../stores/RecordsStore';
import PlayersStore from '../stores/PlayersStore';


export default React.createClass({
  contextTypes: { router: React.PropTypes.func },
  mixins: [
    Reflux.connect(RecordsStore, "records"),
    Reflux.connect(PlayersStore, "players")
  ],

  getInitialState() {
    return {
      players: {},
      records: {
        maxRatings: [],
        minRatings: []
      }
    };
  },

  componentDidMount() {
    PlayersStore.getPlayers();
    RecordsStore.getRecords();
  },

  render() {
    let players = this.state.players;
    let records = this.state.records;

    const getRecordRow = (record) => {
      let player = players[record.playerId] || {name: ""};
      return (
        <tr key={record.playerId}>
          <td>
            <Link to="player" className="image" params={{playerId: record.playerId}}>{player.name}</Link>
          </td>
          <td>{record.rating}</td>
        </tr>
      );
    };

    let highestRatingRows = records.maxRatings.map(getRecordRow);
    let lowestRatingRows = records.minRatings.map(getRecordRow);

    return (
      <div className="Records">
        <h2 className="page-header">Records</h2>
        <TabbedArea defaultActiveKey={1}>

          <TabPane eventKey={1} tab='Ratings'>
            <Row>
              <Col md={6}>
                <h3>Highest Rating</h3>
                <Table striped responsive>
                  <thead>
                    <tr><td>Player</td><td>Rating</td></tr>
                  </thead>
                  <tbody>
                    {highestRatingRows}
                  </tbody>
                </Table>
              </Col>
              <Col md={6}>
                <h3>Lowest Rating</h3>
                <Table striped responsive>
                  <thead>
                  <tr><td>Player</td><td>Rating</td></tr>
                  </thead>
                  <tbody>
                    {lowestRatingRows}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </TabPane>

        </TabbedArea>
      </div>
    );
  }
});


