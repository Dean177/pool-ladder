import Reflux from 'reflux';

export default Reflux.createActions({
  'getLatest': { children: ['completed', 'failed'] },
  'newRating': {}
});