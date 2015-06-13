import Reflux from 'reflux';

export default Reflux.createActions({
  'create': {},
  'loadAll': { children: ['completed', 'failed'] },
  'loadDetail': { children: ['completed', 'failed'] },
  'update': { children: ['completed', 'failed'] }
});
