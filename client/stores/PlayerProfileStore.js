import Reflux from 'reflux';
import PlayerActions from './../actions/PlayerActions';
import PlayerApi from '../webapi/PlayersApi';


export default Reflux.createStore({
  listenables: [PlayerActions],

  init: function () {
    this.player = { }
  },

  onLoadPlayerDetail: function(id) {
    PlayerApi.getProfile(id)
      .then(this.onLoadDetailComplete)
      .error(this.onLoadDetailFailed)
  },

  onLoadPlayerDetailComplete: function(playerDetail) {
    this.player = playerDetail;
    this.trigger(playerDetail);
  },

  onLoadPlayerDetailFailed: function(err) {
    console.log("Failed loading player profile", err);
  }
});
