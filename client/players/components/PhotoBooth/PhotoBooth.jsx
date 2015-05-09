var React = require('react');
var RaisedButton = require('material-ui').RaisedButton;

var Webcam = require('react-webcam');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      image: ""
    }
  },

  getDefaultProps: function() {
    return {

    };
  },

  takePhoto: function(e) {
    e.preventDefault(); // Dont submit the form ...
    var photo = this.refs.webcam.getScreenshot();
    this.setState({image: photo});
  },

  render: function () {
    return (
      <div className="photo-booth">
        <Webcam ref="webcam" />
        <RaisedButton
          label="Take Photo"
          primary={true}
          onClick={this.takePhoto}/>
        <img src={this.state.image} />
        <div className="overlay">3</div>
      </div>
    );
  }
});


