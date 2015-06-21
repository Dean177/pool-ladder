import React from 'react';
import { Navigation } from 'react-router';
import { Button, Input } from 'react-bootstrap';

import PlayerApi from '../webapi/PlayersApi';
import PlayerActions from '../actions/PlayerActions';

export default React.createClass({
  contextTypes: { router: React.PropTypes.func },
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
    } else {
      this.createPlayer({ name: this.state.name });
    }
  },

  createPlayer(newPlayer) {
    PlayerApi.createPlayer(newPlayer)
      .then(this.onCreateCompleted)
      .error(this.onCreateFailed);
  },

  onCreateCompleted: function(player) {
    PlayerActions.newPlayer(player);
    this.clearForm();
    this.transitionTo('players');
  },

  onCreateFailed: function(err) {
    console.error("loadAllFailed:", err);
  },

  clearForm: function() { this.setState({ name: "" }); },

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
        <h2 className="page-header">Add a Player</h2>
        <form onSubmit={this.onSubmit}>
          <Input
              label="Name"
              className="player-name"
              type="text"
              value={this.state.name}
              errorText={this.state.nameError}
              floatingLabelText="Name"
              onChange={this._validateName} />

            <Button bsStyle="primary" className="submit-player" onClick={this.onSubmit}>Save</Button>
        </form>
      </div>
    );
  }
});


