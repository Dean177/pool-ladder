import Reflux from 'reflux';

export default Reflux.createActions({
  'getLatestRatings': { children: ['completed', 'failed'] },
  'newRating': {}
});