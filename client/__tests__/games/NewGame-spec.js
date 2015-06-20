jest.dontMock('../../games/NewGame');

describe('NewGame', () => {

  var React, TestUtils, NewGame, view;

  beforeEach(() => {
    NewGame = require('../../games/NewGame');
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    view = TestUtils.renderIntoDocument(<NewGame />);
    view.transitionTo = jest.genMockFunction();
    view.createGame = jest.genMockFunction().mockImplementation((game) => {
      return {
        then: (resolve) => {
          game.id = 1;
          resolve(game);
          return { error: function() {}}
         }
      };
    });
  });

  it('should navigate to the leaderboard when the cancel button is clicked', () => {
    var cancelButton = TestUtils.findRenderedDOMComponentWithClass(view, "cancel-game");

    TestUtils.Simulate.click(cancelButton);

    expect(view.transitionTo).toBeCalled();
    expect(view.transitionTo.mock.calls[0][0]).toBe('leaderboard');
  });

  it('should submit the game to the GamesApi and transition to the leaderboard', () => {
    var submitButton = TestUtils.findRenderedDOMComponentWithClass(view, "submit-game");
    TestUtils.Simulate.click(submitButton);

    expect(view.createGame).toBeCalled();
    expect(view.transitionTo).toBeCalled();
    expect(view.transitionTo.mock.calls[0][0]).toBe('leaderboard');
  });

});
