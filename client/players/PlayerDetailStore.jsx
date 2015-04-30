var Reflux = require('reflux');
var PlayerActions = require('./PlayerActions');
var $ = require('jquery');

var initialState = {
  loading: false,
  players: []
};

module.exports = Reflux.createStore({
  listenables: [PlayerActions],

  init: function () {
    this.player = {

    }
  },

  getInitialState: function () {
    return this.state = initialState;
  },

  onUpdate: function (player) {
    if (player.id == this.player.id) {
      // update this player
    }
  },


  onCreate: function(player) {
    // TODO
    $.ajax({
      type: 'POST',
      url: UrlResolver.createPlayer,
      dateType: 'json',
      data: player,
      onComplete: function() {}
    });
  }
});
