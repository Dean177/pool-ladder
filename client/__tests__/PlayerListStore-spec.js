jest.dontMock('../players/PlayerListStore');
jest.dontMock('../players/PlayerActions');

var PlayerListStore = require('./../players/PlayerListStore');
var PlayerActions = require('./../actions/PlayerActions');

describe('PlayerListStore', function() {

  it('Initialises with no players', function() {
    var allPlayers = PlayerListStore.players;
    expect(allPlayers).toEqual({});
  });

  it('Should attempt to fetch the players when the loadAll action is called', function() {

    //var onLoadAll = PlayerListStore.onLoadAll.mock;
    //PlayerActions.loadAll("now!");
    //
    //expect(onLoadAll.calls.length).toBe(1);
  });
});