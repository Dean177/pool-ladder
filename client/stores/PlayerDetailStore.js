var Reflux = require('reflux');
var PlayerActions = require('./../actions/PlayerActions');

module.exports = Reflux.createStore({
  listenables: [PlayerActions],

  init: function () {
    this.player = { }
  }
});
