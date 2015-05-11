import Http from './Http';
import UrlResolver from './UrlResolver';

export default {
  getPlayers() {
    return Http.get(UrlResolver.players.all);
  },

  getProfile(id) {
    return Http.get(UrlResolver.players.byId(id))
  },

  createPlayer(player) {
    return Http.create(player, UrlResolver.players.all);
  }
};