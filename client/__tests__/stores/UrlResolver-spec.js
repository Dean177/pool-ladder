jest.dontMock('../../webapi/UrlResolver');

var UrlResolver = require('../../webapi/UrlResolver');

describe("UrlResolver", function() {
  it('Holds the players Url', function() {
    expect(UrlResolver.players.all).toContain("/api/players");
  });
});