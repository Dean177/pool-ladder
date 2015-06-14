import React from 'react';
import { Line as LineChart } from 'react-chartjs';

export default React.createClass({
  propTypes: {
    ratings: React.PropTypes.array
  },

  getDefaultProps() {
    return {
      ratings: [{newRating: 1000, date: new Date().toISOString()}]
    };
  },

  render() {
    let ratingsHistory = this.props.ratings;
    let ratingsLabel = ratingsHistory.map(function(rating, index) { return index + 1; });
    let ratingsValue = ratingsHistory.map(function(rating){ return rating.newRating; });

    let chartData = {
      labels: ratingsLabel,
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

    let chartOptions = {
      bezierCurveTension : 0.1,
      pointDot : false,
      pointHitDetectionRadius : 1,
      scaleShowGridLines : false,
      scaleShowHorizontalLines: false,
      scaleShowVerticalLines: false
    };

    return (
      <LineChart data={chartData} options={chartOptions} redraw width="770" height="400"/>
    );
  }

});
