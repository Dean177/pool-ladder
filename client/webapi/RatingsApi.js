import Http from './Http';
import UrlResolver from './UrlResolver';

export default {
  getLatest() {
    return Http.get(UrlResolver.ratings.latest);
  }
};