export default {
  players: {
    all: `${ window.location.origin }/api/players`,
    create: `${ window.location.origin }/api/players`,
    byId: function(id) { return `${window.location.origin}/api/players/${id}`; },
    ratings: function(id) { return `${window.location.origin}/api/players/${id}/ratings`; },
    games: function(id) { return `${window.location.origin}/api/players/${id}/games`; }
  },
  games: {
    recent: `${ window.location.origin }/api/games`,
    create: `${ window.location.origin }/api/games`,
    delete: function(game) {
      return `${ window.location.origin }/api/games/${game.id}`;
    }
  },
  ratings: {
    latest: `${ window.location.origin }/api/ratings/latest`
  },
  records: `${ window.location.origin }/api/records`
};
