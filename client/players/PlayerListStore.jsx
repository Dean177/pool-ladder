var Reflux = require('reflux');
var $ = require('jquery');
var PlayerActions = require('./PlayerActions');
var UrlResolver = require('../mixins/UrlResolver');

module.exports =  Reflux.createStore({
  mixins: [UrlResolver],
  listenables: [PlayerActions],

  isLoading: true,
  players: {},

  getInitialState: function () {
    return this.players;
  },

  get: function(id) {
    if (this.players.has(id)) {
      return this.players.get(id);
    } else {
      // TODO
    }
  },

  fetchPlayers: function() {
    $.ajax({
      type: 'GET',
      url: UrlResolver.AllPlayers,
      dataType: 'json',
      success: function(response) {
        this.players = new Map(response.players)
      },
      error: function(jqXHR, textStatus, errorThrown) {
        //TODO
      }
    });
  },

  onUpdate: function(player) {

  },


  onLoadAll: function() {

  }
});