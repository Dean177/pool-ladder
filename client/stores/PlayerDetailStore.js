import Reflux from 'reflux';
import PlayerActions from './../actions/PlayerActions';
import PlayerApi from '../webapi/PlayersApi';


export default Reflux.createStore({
  listenables: [PlayerActions],

  init: function () {
    this.player = { }
  },

  onLoadDetail: function(id) {
    PlayerApi.getProfile(id)
      .then(this.onLoadDetailComplete)
      .error(this.onLoadDetailFailed)
  },

  onLoadDetailComplete: function(playerDetail) {
    this.player = playerDetail;
    this.trigger(playerDetail);
  },

  onLoadDetailFailed: function(err) {
    console.log("Failed loading player profile", err);
  }
});
