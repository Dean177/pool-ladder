jest.dontMock('../stores/GamesStore');
jest.dontMock('../actions/GameActions');

var GameActions = require('../actions/GameActions');

describe('GamesStore', function() {
  var GamesStore;

  beforeEach(function() {
    GamesStore = require('./../stores/GamesStore');
  });

  it('Initialises with no games', function() {
    expect(GamesStore.recentGames).toEqual({});
  });

  it('Should attempt to fetch the recent games when the getRecent action is called');

  it('Should trigger the recent games when the recentGamesCompleted event fires', function() {
    var games = [{"id":1,"winnerId":1,"loserId":2,"playedOn":-3600000},{"id":2,"winnerId":2,"loserId":3,"playedOn":-3600000}];
    GameActions.getRecentCompleted(games);

    expect(GamesStore.recentGames.length).toBe(2);
  });
});