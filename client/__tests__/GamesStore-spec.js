jest.dontMock('../stores/GamesStore');

var GamesStore = require('./../stores/GamesStore');
var GameActions = require('./../actions/GameActionss');

describe('GamesStore', function() {

  it('Initialises with no games', function() {
    expect(GamesStore.recentGames).toEqual({});
  });

  it('Should attempt to fetch the recent games when the getRecent action is called');

  it('Should trigger the recent games when receiving a new game');
});