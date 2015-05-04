var React = require('react');
var Navigation = require('react-router').Navigation;
var RaisedButton = require('material-ui').RaisedButton;
var TextField = require('material-ui').TextField;

var PhotoBooth = require('./PhotoBooth');
var PlayerActions = require('../../actions/PlayerActions');

module.exports = React.createClass({
  mixins: [Navigation],
  nameErrorMessage: "Please enter a name",

  getInitialState: function() {
    return {
      name: "",
      nameError: "",
      image: ""
    }
  },

  onSubmit: function (e) {
    e.preventDefault();
    if (!this.isValid()) {
      this.setState({nameError: this.nameErrorMessage});
      return;
    }

    PlayerActions.create({
      name: this.state.name,
      rank: 3,
      rating: 1000,
      image: '/images/players/badger.jpg',
      creationDate: new Date(),
      isActive: true
    });

    this.clearForm();
    this.transitionTo('players');
  },

  clearForm: function() { this.setState({name: "", nameError: "", image:""}); },

  isValid: function() { return this.isValidName(this.state.name) && this.isValidImage; },
  isValidName: function(name) { return name.trim().length > 0; },
  isValidImage: function() { return true; },

  _validateName: function(event) {
    var name = event.target.value;
    if (!this.isValidName(name)) {
        this.setState({
            name: name.trim(),
            nameError: this.nameErrorMessage
        });
    } else {
        this.setState({
            name: name.trim(),
            nameError: ""
        });
    }
  },

  render: function () {
    return (
      <div>
        <h1 className="page-header">Add a Player</h1>
        <form onSubmit={this.onSubmit}>
          <TextField
              value={this.state.name}
              errorText={this.state.nameError}
              floatingLabelText="Name"
              onChange={this._validateName} />
            <PhotoBooth />
            <RaisedButton
              label="Save"
              secondary={true}
              onClick={this.onSubmit}/>
        </form>
      </div>
    );
  }
});


