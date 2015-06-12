import React from 'react';


export default React.createClass({
    render() {
        return(
            <div className="RuleCard">
                {this.props.children}
            </div>
        );
    }
});