import React from 'react';
import { RouteHandler } from 'react-router';

import Sidenav from './sidenav';

export default React.createClass({
  render: function () {
    return (
      <div id="wrapper">
        <div id="sidebar-wrapper">
            <Sidenav />
        </div>
        <div id="page-content-wrapper">
            <div className="container-fluid">
                <RouteHandler/>
            </div>
        </div>
      </div>
    );
  }
});

