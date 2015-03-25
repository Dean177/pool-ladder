var React = require('react');
var Link = require('react-router').Link;
var Paper = require('material-ui').Paper;

var Component = React.createClass({
  render: function () {
    var player = this.props.player;
    return (
      <Paper zDepth={2} className="PlayerCard" innerClassName="PlayerCardContents">
        <Link to="player" className="image" params={{playerID: player.id}}>
            <img src={player.image} />
        </Link>
        <div className="details">
            <div className="name">{player.name}</div>
            <div className="rating">rating: {player.rating}</div>
            <div className="win-rate"><span>win rate: 75%</span></div>
        </div>
        <div className="rank">{'#'} {player.rank}</div>
      </Paper>
    );
  }
});

module.exports = Component;
