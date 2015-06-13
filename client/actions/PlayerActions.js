import Reflux from 'reflux';

export default Reflux.createActions({
  'newPlayer': {},
  'loadAllPlayers': { children: ['completed', 'failed'] },
  'loadPlayerDetail': { children: ['completed', 'failed'] }
});
