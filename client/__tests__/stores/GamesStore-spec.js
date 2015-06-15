jest.dontMock('../../stores/GamesStore');
jest.dontMock('../../actions/GameActions');


describe('GamesStore', function() {
  var GameActions;
  var GamesStore;

  beforeEach(function() {
    GameActions = require('../../actions/GameActions');
    GamesStore = require('../../stores/GamesStore');
  });

  it('Initialises with no games', function() {
    expect(GamesStore.recentGames).toEqual({});
  });

  it('Should attempt to fetch the recent games when the getRecent action is called');

  it('Should trigger the recent games when the recentGamesCompleted event fires');
});