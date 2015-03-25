var React = require('react');
var Link = require('react-router').Link;
var State = require('react-router').State;

/** Use like a <Link />. Returns an <a> wrapped in a <li> which gets the 'active' class applied **/
module.exports = React.createClass({
    mixins: [State],

    render: function () {
        var isActive = this.isActive(this.props.to, this.props.params, this.props.query);
        var className = isActive ? 'active' : '';
        var link = (
            <Link {...this.props} />
        );

        return (
            <li className={className}>{link}</li>
        );
    }
});