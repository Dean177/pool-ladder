jest.dontMock('../players/PlayerListStore');
jest.dontMock('../players/PlayerActions');

describe('PlayerListStore', function() {
  var PlayerListStore, PlayerActions;

  beforeEach(function() {
    PlayerListStore = require('./../players/PlayerListStore');
    console.log("playerList = " + PlayerListStore);
    PlayerActions = require('./../players/PlayerActions')
  });

  it('Initialises with no players', function() {
    console.log("PlayerListStore", PlayerListStore);
    var allPlayers = PlayerListStore.getAll();

    expect(all).toEqual({});
  });

  it('Should attempt to fetch the players when the loadAll action is called', function() {
    var onLoadAll = PlayerListStore.onLoadAll.mock;
    PlayerActions.loadAll("now!");

    expect(onLoadAll.calls.length).toBe(1);
  });
});