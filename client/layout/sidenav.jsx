var React = require('react');
var NavTab = require('../shared/NavTab');
var FontAwesome = require('../shared/FontAwesome');

module.exports = React.createClass({
  render: function () {
    return (
      <ul className="sidebar-nav">
        <div className="brandLink" />
        <NavTab to="leaderboard">
          <FontAwesome icon="list-ol" />
          <div className="nav-label">Leaderboard</div>
        </NavTab>
        <NavTab to="players">
          <FontAwesome icon="users" />
          <div className="nav-label">Players</div>
        </NavTab>
        <NavTab to="games">
          <FontAwesome icon="play-circle-o" />
          <div className="nav-label">Games</div>
        </NavTab>
        <NavTab to="records">
          <FontAwesome icon="trophy" />
          <div className="nav-label">Records</div>
        </NavTab>
        <NavTab to="graphs">
          <FontAwesome icon="line-chart" />
          <div className="nav-label">Graphs</div>
        </NavTab>
        <NavTab to="rules">
          <FontAwesome icon="book" />
          <div className="nav-label">Rules</div>
        </NavTab>
        <NavTab to="live">
          <FontAwesome icon="video-camera" />
          <div className="nav-label">Live</div>
        </NavTab>
      </ul>
    );
  }
});