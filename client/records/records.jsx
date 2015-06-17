import React from 'react';
import {Row, Col, Table} from 'react-bootstrap';

export default React.createClass({
  render() {
    return (
      <div className="Records">
        <h2 className="page-header">Records</h2>
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

        <Row>
          <Col md={6}>
            <h3>Winning Streak</h3>
          </Col>
          <Col md={6}>
            <h3>Losing Streak</h3>
          </Col>
        </Row>
      </div>
    );
  }
});


