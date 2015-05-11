import Http from './Http'
import UrlResolver from './UrlResolver';

export default {
  getRecentGames() {
    return Http.get(UrlResolver.games.recent);
  },

  createGame(game) {
    return Http.create(game, UrlResolver.games.create)
  }
};

