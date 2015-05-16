import Reflux from 'reflux';

export default Reflux.createActions({
  'newRating': {},
  'getLatest': { children: ['completed', 'failed'] }
});