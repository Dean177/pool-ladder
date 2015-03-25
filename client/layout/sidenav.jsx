var React = require('react');
var NavTab = require('../shared/NavTab');
var FontAwesome = require('../shared/FontAwesome');

module.exports = React.createClass({
    render: function () {
        return (
            <ul className="sidebar-nav">
                <NavTab to="leaderboard">
                    <FontAwesome icon="list-ol" />
                    <div class="label">Leaderboard</div>
                </NavTab>
                <NavTab to="players">
                    <FontAwesome icon="users" />
                    <div class="label">Players</div>
                </NavTab>
                <NavTab to="games">
                    <FontAwesome icon="play-circle-o" />
                    <div class="label">Games</div>
                </NavTab>
                <NavTab to="records">
                    <FontAwesome icon="trophy" />
                    <div class="label">Records</div>
                </NavTab>
                <NavTab to="graphs">
                    <FontAwesome icon="line-chart" />
                    <div class="label">Graphs</div>
                </NavTab>
                <NavTab to="rules">
                    <FontAwesome icon="book" />
                    <div class="label">Rules</div>
                </NavTab>
                <NavTab to="live">
                    <FontAwesome icon="video-camera" />
                    <div class="label">Live</div>
                </NavTab>
            </ul>
        );
    }
});