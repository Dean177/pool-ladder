var Reflux = require('reflux');

module.exports = Reflux.createActions({
  'create': { children: ['completed', 'failed'] },
  'loadDetail': { children: ['completed', 'failed'] },
  'loadAll': { children: ['completed', 'failed'] },
  'update': { children: ['completed', 'failed'] }
});



