var Reflux = require('reflux');
//var $ = require('jquery');
var PlayerActions = require('./PlayerActions');
var UrlResolver = require('../mixins/UrlResolver');

module.exports =  Reflux.createStore({
  // TODO once confident the below works, remove the init block as it can be replaced with the below.
  // listenables: [PlayerActions],

  isLoading: true,
  //players: {},

  init: function() {
    this.listenTo(PlayerActions.update, this.onUpdate);
    this.listenTo(PlayerActions.loadAll, this.onLoadAll);
    this.listenTo(PlayerActions.loadAllCompleted, this.onLoadAllCompleted);
    this.listenTo(PlayerActions.loadAllFailed, this.onLoadAllFailed);
  },

  getInitialState: function () {
    return this.players;
  },

  getAll: function() {
    return this.players;
  },

  onUpdate: function(player) {
    // TODO update the player, trigger the event.
  },

  onLoadAll: function() {
    this.fetchPlayers();
  },

  onLoadAllCompleted: function(players) {
    this.trigger(players);
  },

  onLoadAllFailed: function() {

  },

  fetchPlayers: function() {
    //$.ajax({
    //  type: 'GET',
    //  url: UrlResolver.players.all,
    //  dataType: 'json',
    //  success: PlayerActions.loadAllCompleted,
    //  error: PlayerActions.loadAllFailed
    //});
  }
});