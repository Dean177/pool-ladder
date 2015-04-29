var Reflux = require('reflux');
var $ = require('jquery');
var PlayerActions = require('./PlayerActions');
var UrlResolver = require('../mixins/UrlResolver');

const PlayerListStore =  Reflux.createStore({
  mixins: [UrlResolver],
  listenables: PlayerActions,

  isLoading: true,
  players: new Map(),

  getInitialState() {
    return this.players;
  },

  get(id) {
    if (this.players.has(id)) {
      return this.players.get(id);
    } else {

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

      }
    });
  },

  onUpdate (player) {

  },

  onCreate (player) {

  }
});

export default PlayerListStore;