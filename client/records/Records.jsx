import React from 'react';
import {TabbedArea, TabPane, Row, Col, Table} from 'react-bootstrap';

export default React.createClass({
  render() {
    return (
      <div className="Records">
        <h2 className="page-header">Records</h2>
        <TabbedArea defaultActiveKey={1}>
          <TabPane eventKey={1} tab='Ratings'>
            <Row>
              <Col md={6}>
                <h3>Highest Rating</h3>
                <Table striped responsive>
                  <tbody>

                  </tbody>
                </Table>
              </Col>
              <Col md={6}>
                <h3>Lowest Rating</h3>
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


