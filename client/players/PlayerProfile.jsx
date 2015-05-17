import React from 'react';
import Reflux from 'reflux';
import { Line as LineChart } from 'react-chartjs';
import Router from 'react-router';
var { State, Navigation } = Router;

import PlayerActions from './../actions/PlayerActions';
import ProfileStore from './../stores/PlayerProfileStore';
import RatingsStore from './../stores/PlayerRatingsStore';
import GamesStore from './../stores/PlayerGamesStore';

export default React.createClass({
  mixins: [
    State,
    Navigation,
    Reflux.connect(ProfileStore, "player"),
    Reflux.connect(RatingsStore, "ratings"),
    Reflux.connect(GamesStore, "games")
  ],

  getInitialState: function() {
    return {
      player: {},
      ratings: [{newRating: 1000, date: new Date().toISOString()}],
      games: []
    };
  },

  componentDidMount: function() {
    PlayerActions.loadDetail(this.getParams().playerId);
  },

  render: function () {
    let ratingsHistory = this.state.ratings;
    let ratingsDate = ratingsHistory.map(function(rating) {return rating.date;});
    let ratingsValue = ratingsHistory.map(function(rating){ return rating.newRating; });
    let chartData = {
      labels: ratingsDate,
      datasets: [
        {
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: ratingsValue
        }
      ]
    };

    console.log("games", this.state.games);
    let currentPlayerId = this.getParams().playerId || 0;
    let gamesRows = this.state.games.map(function(game) {
      if (currentPlayerId == game.winnerId) {
        return (<h3 key={game.id}>Defeated {game.loserId} on {new Date(game.playedOn).toDateString()} </h3>);
      } else {
        return (<h3 key={game.id}>Lost to {game.winnerId} on {new Date(game.playedOn).toDateString()} </h3>);
      }
    });

    return (
      <div>
        <h1 className="page-header">{this.state.player.name}</h1>
        <LineChart data={ chartData } redraw width="600" height="250"/>
        <div>{gamesRows}</div>
      </div>
    );
  }

});
