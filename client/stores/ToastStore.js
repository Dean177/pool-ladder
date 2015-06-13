import Reflux from 'reflux';
import ToastActions from '../actions/ToastActions';

export default Reflux.createStore({
  listenables: ToastActions,

  init() {
    this.toasts = []
  },

  onNewToast: function(toast) {
    this.toasts.push(toast);
    this.trigger(toast);
  }
});