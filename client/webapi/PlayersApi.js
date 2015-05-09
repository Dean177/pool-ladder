import CrudApi from './CrudApi';
import UrlResolver from './UrlResolver';

export default {
  getPlayers() {
    return CrudApi.get(UrlResolver.players.all);
  },

  createPlayer(player) {
    return CrudApi.create(player, UrlResolver.players.all);
  }
};