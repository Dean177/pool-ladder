module.exports = {
  players: {
    all: `${ window.location.origin }/api/players`,
    create: `${ window.location.origin }/api/players`,
    byId: function(id) { return `${window.location.origin}/api/players/${id}`; }
  },
  games: {
    recent: `${ window.location.origin }/api/games`,
    create: `${ window.location.origin }/api/games`
  }
};
