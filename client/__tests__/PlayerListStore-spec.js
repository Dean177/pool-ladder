jest.dontMock('../stores/PlayerListStore');
jest.dontMock('../actions/PlayerActions');


describe('PlayerListStore', function() {
  var PlayerListStore;
  var PlayerActions;

  beforeEach(function() {
    PlayerListStore = require('../stores/PlayerListStore');
    PlayerActions = require('../actions/PlayerActions');
  });

  it('Initialises with no players', function() {
    var allPlayers = PlayerListStore.players;
    expect(allPlayers).toEqual({});
  });

  it('Should attempt to fetch the players when the loadAll action is called', function() {
    var playerApi = require('../webapi/PlayersApi');
    PlayerActions.loadAll();
    playerApi.getPlayers()



    console.log("players", playerApi)

    expect(playerApi.getPlayers).toBeCalled()
  });
});