var Reflux = require('reflux');
var PlayerActions = require('./../actions/PlayerActions');
var $ = require('jquery');

var UrlResolver = require('../webapi/UrlResolver');


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

  get: function(id) {
    if (this.players.has(id)) {
      return this.players.get(id);
    } else {
      // TODO
    }
  },

  onCreate: function(player) {
    // TODO
    $.ajax({
      type: 'POST',
      url: UrlResolver.players.create,
      dateType: 'json',
      data: player,
      success: PlayerActions.loadDetailCompleted,
      error: PlayerActions.loadDetailFailed
    });
  }
});
