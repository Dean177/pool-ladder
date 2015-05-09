var Reflux = require('reflux');

module.exports = Reflux.createActions({
  'getRecent': { children: ['completed', 'failed'] },
  'create': { children: ['completed', 'failed'] }
});