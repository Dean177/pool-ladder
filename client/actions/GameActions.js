import Reflux from 'reflux';

export default Reflux.createActions({
  'create': {},
  'delete': {},
  'getRecent': { children: ['completed', 'failed'] }
});