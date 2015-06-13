import Reflux from 'reflux';

export default Reflux.createActions({
  'newGame': {},
  'deleteGame': {},
  'getRecentGames': { children: ['completed', 'failed'] }
});