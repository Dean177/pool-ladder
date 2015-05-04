"use strict";
jest.dontMock('../mixins/UrlResolver');

var UrlResolver = require('../mixins/UrlResolver');

describe("UrlResolver", function() {
  it('Holds the players Url', function() {
    expect(UrlResolver.players.all).toContain("/api/players");
  });
});