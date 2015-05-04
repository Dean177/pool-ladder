"use strict";
jest.dontMock('../mixins/UrlResolver');

var UrlResolver = require('../mixins/UrlResolver');

describe("UrlResolver", function() {
  it('Holds the players Url', function() {
    console.log(UrlResolver.players.all);
    expect(UrlResolver.players.all).toContain("/api/players");
  });
});