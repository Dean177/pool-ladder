import React from 'react';
import Reflux from 'reflux';
import {TabbedArea, TabPane, Row, Col, Table} from 'react-bootstrap';

import RecordsStore from '../stores/RecordsStore';

export default React.createClass({
  mixins: [Reflux.connect(RecordsStore, "records")],

  getInitialState() {
    return {
      records: {
        maxRatings: [],
        minRatings: []
      }
    };
  },

  componentDidMount() {
    RecordsStore.getRecords();
  },

  render() {
    let records = this.state.records;

    let highestRatingRows = records.maxRatings.map((record) => {
      return (<tr key={record.playerId}><td>{record.playerId}</td><td>{record.rating}</td></tr>);
    });

    let lowestRatingRows = records.minRatings.map((record) => {
      return (<tr key={record.playerId}><td>{record.playerId}</td><td>{record.rating}</td></tr>);
    });


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

          <TabPane eventKey={2} tab='Winning Streaks'>
            <Row>
              <Col md={6}>
                <h3>Winning Streak</h3>
              </Col>
              <Col md={6}>
                <h3>Losing Streak</h3>
              </Col>
            </Row>
          </TabPane>

        </TabbedArea>
      </div>
    );
  }
});


