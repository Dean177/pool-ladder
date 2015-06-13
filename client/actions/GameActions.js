import Reflux from 'reflux';

export default Reflux.createActions({
  'getRecent': { children: ['completed', 'failed'] },
  'create': {}
});