// TODO replace this with server generated routes: https://www.playframework.com/documentation/2.4.x/ScalaJavascriptRouting
export default {
  players: {
    all: `${ window.location.origin }/api/players`,
    create: `${ window.location.origin }/api/players`,
    byId: function(id) { return `${window.location.origin}/api/players/${id}`; }
  },
  games: {
    recent: `${ window.location.origin }/api/games`,
    create: `${ window.location.origin }/api/games`
  },
  ratings: {
    latest: `${ window.location.origin }/api/ratings/latest`
  }
};
