import Reflux from 'reflux';

export default Reflux.createActions({
  'create': {},
  'loadDetail': { children: ['completed', 'failed'] },
  'loadAll': { children: ['completed', 'failed'] },
  'update': { children: ['completed', 'failed'] }
});
