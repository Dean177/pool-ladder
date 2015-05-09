import React from 'react';
import { Navigation } from 'react-router';
import { RaisedButton, TextField }from 'material-ui';

import PlayerActions from '../actions/PlayerActions';

export default React.createClass({
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
      name: this.state.name
    });

    this.clearForm();
    this.transitionTo('players');
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
          <TextField
              value={this.state.name}
              errorText={this.state.nameError}
              floatingLabelText="Name"
              onChange={this._validateName} />

            <RaisedButton
              label="Save"
              secondary={true}
              onClick={this.onSubmit}/>
        </form>
      </div>
    );
  }
});


