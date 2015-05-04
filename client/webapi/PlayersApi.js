var request = require('superagent');
var Promise = require('bluebird');
var UrlResolver = require('../mixins/UrlResolver');

window.api = module.exports = {
  getPlayers: function() {
    return new Promise(function (resolve, reject) {
      request
        .get(UrlResolver.players.all)
        .end(function (err, players) {
          if (err) { reject(err); }
          resolve(players);
        })
    });
  },

  createPlayer: function(player) { }
};