import React from 'react';
import { Line as LineChart } from 'react-chartjs';

export default React.createClass({
  propTypes: {
    ratings: React.PropTypes.array
  },

  getDefaultProps() {
    return {
      ratings: [{newRating: 1000, date: new Date().toISOString()}],
    };
  },

  render() {
    let ratingsHistory = this.props.ratings;
    let ratingsDate = ratingsHistory.map(function(rating) {return rating.date;});
    let ratingsValue = ratingsHistory.map(function(rating){ return rating.newRating; });

    let chartData = {
      labels: ratingsDate,
      datasets: [
        {
          fillColor: "rgba(34,53,171,0.2)",
          strokeColor: "rgba(34,53,171,1)",
          pointColor: "rgba(34,53,171,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(34,53,171,1)",
          data: ratingsValue
        }
      ]
    };
    return (
      <LineChart data={chartData} redraw width="600" height="250"/>
    );
  }

});
