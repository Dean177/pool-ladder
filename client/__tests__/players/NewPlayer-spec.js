jest.dontMock('../../players/NewPlayer');

describe('NewPlayer', () => {

  var React, TestUtils, NewPlayer, view;

  beforeEach(() => {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;

    NewPlayer = require('../../players/NewPlayer');
    view = TestUtils.renderIntoDocument(<NewPlayer />);
    view.transitionTo = jest.genMockFunction();
    view.createPlayer = jest.genMockFunction().mockImplementation((player) => {
      view.onCreateCompleted(player);
    });
  });

  it('should not submit the player when no name has been entered', () => {
    var submitButton = TestUtils.findRenderedDOMComponentWithClass(view, "submit-player");

    TestUtils.Simulate.click(submitButton);

    expect(view.createPlayer.mock.calls.length).toBe(0);
    expect(view.transitionTo.mock.calls.length).toBe(0);
  });

  it('should navigate to the players section after creating a player', () => {
    var saveButton = TestUtils.findRenderedDOMComponentWithClass(view, "submit-player");
    var nameField = TestUtils.findRenderedDOMComponentWithClass(view, "player-name");
    var nameFieldDom = nameField.getDOMNode();

    TestUtils.Simulate.change(nameFieldDom, {target: {value: "Pudu"}});
    TestUtils.Simulate.click(saveButton);
    jest.runAllTimers();

    expect(view.createPlayer).toBeCalled();
    expect(view.createPlayer.mock.calls[0][0]).toEqual({name: "Pudu"});
    expect(view.transitionTo).toBeCalled();
    expect(view.transitionTo.mock.calls[0][0]).toBe('players');
  });
});

