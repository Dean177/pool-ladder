var React = require('react');
var Link = require('react-router').Link;

/** Use like a <Link />. Returns an <a> wrapped in a <li> which gets the 'active' class applied **/
module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  render: function () {
    var router = this.context.router;

      var isActive = router.isActive(this.props.to, this.props.params, this.props.query);
      var className = isActive ? 'active' : '';
      var link = (
        <Link {...this.props} />
      );

      return (
        <li className={className}>{link}</li>
      );
    }
});