var Reflux = require('reflux');

module.exports = Reflux.createActions({
  'create': { children: ['completed', 'failed'] },
  'load': { children: ['completed', 'failed'] },
  'update': { children: ['completed', 'failed'] }
});



