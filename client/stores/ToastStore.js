import Reflux from 'reflux';
import ToastActions from '../actions/ToastActions';

export default Reflux.createStore({
  listenables: ToastActions,

  onNewToast: function(toast) {
    this.trigger(toast);
  }
});