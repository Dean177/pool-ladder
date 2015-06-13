import React from 'react';
import Reflux from 'reflux';
import Toastr from 'react-toastr';
var { ToastContainer, ToastMessage } = Toastr;
import ToastStore from '../stores/ToastStore';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

export default React.createClass({
  mixins: [Reflux.listenTo(ToastStore, "onNewToast")],

  onNewToast(toast) {
    let { style, body, title, options } = toast;
    this.refs.toastMessages[style](body, title, options);
  },

  render() {
    return (
      <ToastContainer ref="toastMessages" toastMessageFactory={ToastMessageFactory} className="toast-bottom-left toast-messages" />
    );
  }
});