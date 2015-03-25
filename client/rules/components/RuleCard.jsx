var React = require('react');
var Paper = require('material-ui').Paper;

module.exports = React.createClass({
    render: function () {
        return(
            <Paper zDepth={2} className="RuleCard" innerClassName="RuleCardContents">
                {this.props.children}
            </Paper>
        );
    }
});