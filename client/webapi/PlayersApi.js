import Http from './Http';
import UrlResolver from './UrlResolver';

export default {
  getPlayers() {
    console.log("PlayersApi", Http);
    return Http.get(UrlResolver.players.all);
  },

  getProfile(id) {
    return Http.get(UrlResolver.players.byId(id))
  },

  getRatingHistory(id) {
    return Http.get(UrlResolver.players.ratings(id))
  },

  getGames(id) {
    return Http.get(UrlResolver.players.games(id))
  },

  createPlayer(player) {
    return Http.create(player, UrlResolver.players.all);
  }
};