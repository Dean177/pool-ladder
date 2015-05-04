var request = require('superagent');
var Promise = require('bluebird');
var UrlResolver = require('./UrlResolver');

window.api = module.exports = {
  getRecentGames: function() {
    return new Promise(function (resolve, reject) {
      request
        .get(UrlResolver.games.recent)
        .end(function (err, response) {
          if (err) { reject(err); }
          resolve(JSON.parse(response.text));
        })
    });
  },

  createGame: function(game) { }
};