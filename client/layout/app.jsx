import React from 'react';
import { RouteHandler } from 'react-router';
import { Grid, Col, Row } from 'react-bootstrap';

import Sidenav from './sidenav';
import ToastMessages from './ToastMessages';

export default React.createClass({
  render() {
    return (
      <div id="wrapper">
        <div id="sidebar-wrapper">
          <Sidenav />
        </div>
        <div id="page-content-wrapper">
          <Grid fluid={true}>
            <RouteHandler />
            <ToastMessages />
          </Grid>
        </div>
      </div>
    );
  }
});
