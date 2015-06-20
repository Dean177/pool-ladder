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
    let ratings = this.props.ratings;

    var last30Ratings;
    if (ratings.length <= 30) {
      last30Ratings = ratings;
    } else {
      last30Ratings = ratings.slice(ratings.length - 30, ratings.length)
    }

    let firstRatingLabel = ratings.length - last30Ratings.length;
    let ratingsLabel = last30Ratings.map(function(rating, index) { return firstRatingLabel + index; });
    let ratingsValue = last30Ratings.map(function(rating){ return rating.newRating; });

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
      pointDot : true,
      pointHitDetectionRadius : 1,
      scaleShowGridLines : false,
      scaleShowHorizontalLines: false,
      scaleShowVerticalLines: false
    };

    return (
      <LineChart data={chartData} options={chartOptions} className="RatingsGraph" redraw width="300" height="320"/>
    );
  }

});
