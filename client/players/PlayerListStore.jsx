var Reflux = require('reflux');
var socket = {
  emit: function() {},
  on: function(string, callback) {}
};
var PlayerActions = require('./PlayerActions');

module.exports = Reflux.createStore({
  listenables: PlayerActions,

  init: function () {
    socket.on('player:all', this.updateList.bind(this));
    socket.on('player:create', this.createPlayer.bind(this));
    socket.on('player:updated', this.updatePlayer.bind(this));
  },

  getInitialState: function () {
    return this.list || [];
  },

  onUpdate: function (player) {
    // Tell the socket we want to update the players list.
    player.saving = true;
    socket.emit('update player', player, function (err, message) {
        if (err) { console.error(err); }

        this.updatePlayer(player);
      }.bind(this)
    );
  },

  updatePlayer: function (player) {
    this.updateWithID(player.id, function (updatedPlayer, index, arr) {
      updatedPlayer = player;
      updatedPlayer.saving = false;
      updatedPlayer.editing = false;
      arr[index] = updatedPlayer;
    });
  },

  onCreate: function (player) {
    this.createPlayer(player);
    socket.emit('player:create', player);
  },

  createPlayer: function (player) {
    console.log('Create player', player);
    this.list.push(player);
    this.updateList(this.list);
  },

  updateList: function (list) {
    this.list = list;
    this.trigger(list);
  },

  updateWithID: function (id, callback) {
    this.list.forEach(function (player, index, arr) {
      if (player.id === id) {
        callback(player, index, arr);
      }
    });

    this.updateList(this.list);
  }
});

//var Reflux = require('reflux');
//var socket = io();
//
//var PlayerActions = require('./PlayerActions');
//
//module.exports = Reflux.createStore({
//  listenables: PlayerActions,
//
//  playerDetails: [],
//
//  init: function() {
//    this.playerDetailBucket = {};
//    socket.on('player:read', this.updatePlayerDetail.bind(this));
//    socket.on('player:update', this.updatePlayerDetail.bind(this));
//  },
//
//  loadPlayerDetail: function() {
//    var playerId = arguments[0];
//
//    if (this.playerDetailBucket[playerId]) {
//      this.trigger(this.playerDetailBucket[playerId])
//    } else {
//
//    }
//  },
//
//  updatePlayerDetail: function(player) {
//    if (!this.playerDetailBucket[player.id]) {
//      return;
//    }
//  }
//});


