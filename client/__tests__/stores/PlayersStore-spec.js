jest.dontMock('../../stores/PlayersStore');
jest.dontMock('../../actions/PlayerActions');
jest.setMock('../../webapi/PlayersApi', require('../../__mocks__/PlayersApiMock'));

describe('PlayersStore', function() {
  var PlayersStore;
  var PlayerActions;
  var PlayersApi;
  var mockFunction;

  beforeEach(function() {
    PlayersStore = require('../../stores/PlayersStore');
    PlayerActions = require('../../actions/PlayerActions');
    PlayersApi = require('../../webapi/PlayersApi');

    mockFunction = jest.genMockFunction();
    PlayersStore.listen(mockFunction);
  });

  it('Initialises with no players', function() {
    var allPlayers = PlayersStore.players;
    expect(allPlayers).toEqual({});
  });

  it('Should trigger with the provided player when the newPlayer action is called', () => {
    let playerId = 2;
    let newPlayer = { id: playerId, name: "Duck"};
    PlayerActions.newPlayer(newPlayer);
    jest.runAllTimers();

    expect(mockFunction).toBeCalled();
    expect(mockFunction.mock.calls[0][0][playerId]).toBe(newPlayer);
  });

  it('Should attempt to fetch the players when the loadAll action is called', () => {
    PlayerActions.loadAllPlayers();
    jest.runAllTimers();

    expect(PlayersApi.getPlayers).toBeCalled();
  });

  it('Should trigger with the retrieved players when the loadAll action is completed', () => {
    let players = { 1: {}};
    PlayerActions.loadAllPlayers.completed(players);
    jest.runAllTimers();

    expect(mockFunction).toBeCalled();
    expect(mockFunction.mock.calls[0][0]).toBe(players);
  });


});