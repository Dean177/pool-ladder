import Http from './Http'
import UrlResolver from './UrlResolver';

export default {
  getRecords() {
    return Http.get(UrlResolver.records);
  }
};

