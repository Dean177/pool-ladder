jest.dontMock('../../stores/RankingsStore');


describe('RankingsStore', function() {
  var RankingsStore;
  var mockFunction;

  beforeEach(function() {
    RankingsStore = require('../../stores/RankingsStore');

    mockFunction = jest.genMockFunction();
    RankingsStore.listen(mockFunction);
  });


  it('Provide a mapping from playerId to ranking', () => {
    let playerRatings = [{id: 1, rating: 1300}, {id:2 , rating: 1200}, {id:3, rating: 1100}];
    RankingsStore.onLatestRankings(playerRatings);
    jest.runAllTimers();

    expect(mockFunction).toBeCalled();
    expect(mockFunction.mock.calls[0][0]).toEqual({1: 1, 2: 2, 3: 3});
  });
});