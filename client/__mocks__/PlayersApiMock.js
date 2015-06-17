var PlayersApi = jest.genMockFromModule('../webapi/PlayersApi');

function getPlayers() {
  return {
    then: function(resolve) {
      resolve({ 1: {name:"Badger"}});
      return { error: function() {}}
    }
  };
}

PlayersApi.getPlayers.mockImplementation(getPlayers);

module.exports = PlayersApi;
