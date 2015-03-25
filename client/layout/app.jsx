var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Sidenav = require('./sidenav');

module.exports = React.createClass({
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

