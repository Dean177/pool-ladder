import Reflux from 'reflux';
import PlayerActions from './../actions/PlayerActions';
import PlayerApi from '../webapi/PlayersApi';


export default Reflux.createStore({
  listenables: [PlayerActions],

  init: function () {
    this.player = { }
  },

  onLoadPlayerDetail(id) {
    PlayerApi.getProfile(id)
      .then(PlayerActions.loadPlayerDetail.completed)
      .error(PlayerActions.loadPlayerDetail.failed)
  },

  onLoadPlayerDetailCompleted(playerDetail) {
    this.player = playerDetail;
    this.trigger(playerDetail);
  },

  onLoadPlayerDetailFailed(err) {
    console.log("Failed loading player profile", err);
  }
});
