jest.dontMock('../stores/PlayersStore');
jest.dontMock('../actions/PlayerActions');


describe('PlayersStore', function() {
  var PlayersStore;
  var PlayerActions;

  beforeEach(function() {
    PlayersStore = require('../stores/PlayersStore');
    PlayerActions = require('../actions/PlayerActions');
  });

  it('Initialises with no players', function() {
    var allPlayers = PlayersStore.players;
    expect(allPlayers).toEqual({});
  });

  it('Should attempt to fetch the players when the loadAll action is called', function() {
    var playerApi = require('../webapi/PlayersApi');
    PlayerActions.loadAllPlayers();
    playerApi.getPlayers();

    expect(playerApi.getPlayers).toBeCalled()
  });
});