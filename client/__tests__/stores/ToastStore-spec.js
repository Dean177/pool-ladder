jest.dontMock('../../stores/ToastStore');
jest.dontMock('../../actions/PlayerActions');
jest.dontMock('../../actions/GameActions');

describe("ToastStore", () => {
  var GameActions;
  var PlayerActions;
  var ToastStore;
  var mockFunction;

  beforeEach(() => {
    GameActions = require('../../actions/GameActions');
    PlayerActions = require('../../actions/PlayerActions');
    ToastStore = require('../../stores/ToastStore');

    mockFunction = jest.genMockFunction();
    ToastStore.listen(mockFunction);
  });

  it("Creates a toast on a new player", () => {
    PlayerActions.newPlayer({id: 1, name: 'Badger'});
    jest.runAllTimers();

    expect(mockFunction.mock.calls.length).toBe(1);
  });

  it("Creates a toast on a new game", () => {
    GameActions.newGame({id: 1, winner: {name: "Badger"}, loser: {name: "Goat"}});
    jest.runAllTimers();

    expect(mockFunction.mock.calls.length).toBe(1);
  });
});
