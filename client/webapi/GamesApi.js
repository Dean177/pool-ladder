import CrudApi from './CrudApi'
import UrlResolver from './UrlResolver';

export default {
  getRecentGames() {
    return CrudApi.get(UrlResolver.games.recent);
  },

  createGame(game) {
    return CrudApi.create(game, UrlResolver.games.create)
  }
};

