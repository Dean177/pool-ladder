var request = require('superagent');
var Promise = require('bluebird');
var UrlResolver = require('../mixins/UrlResolver');

window.api = module.exports = {
  getPlayers: function() {
    return new Promise(function (resolve, reject) {
      request
        .get(UrlResolver.players.all)
        .end(function (err, response) {
          if (err) { reject(err); }
          resolve(JSON.parse(response.text));
        })
    });
  },

  createPlayer: function(player) { }
};