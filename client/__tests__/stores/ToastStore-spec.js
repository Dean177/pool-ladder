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
    let playerName = "Badger";
    PlayerActions.newPlayer({id: 1, name: playerName});
    jest.runAllTimers();

    expect(mockFunction.mock.calls.length).toBe(1);
    expect(mockFunction.mock.calls[0][0].title).toBe(`Created new player: ${playerName}` );
  });

  it("Creates a toast on a new game", () => {
    let winnerName = "Badger";
    let loserName = "Goat";
    GameActions.newGame({id: 1, winner: {name: winnerName}, loser: {name: loserName}});
    jest.runAllTimers();

    expect(mockFunction.mock.calls.length).toBe(1);
    expect(mockFunction.mock.calls[0][0].title).toBe(`${winnerName} beat ${loserName}` );
    expect(mockFunction.mock.calls[0][0].options.handleOnClick).toEqual(jasmine.any(Function));
  });
});
