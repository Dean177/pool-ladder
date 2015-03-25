var React = require('react');
var materialUi = require('material-ui');
var Tab = materialUi.Tab;
var Tabs = materialUi.Tabs;

var SoftwireRules = require('./SoftwireRules');
var EnglishRules = require('./EnglishRules');



module.exports = React.createClass({
    _onActive: function(tab){
        this.transitionTo(tab.props.route);
    },

    render: function () {
        return (
            <div className="rule-tabs">
                <Tabs>
                    <Tab label="Softwire" route="softwire">
                        <div className="rule-content">
                            <SoftwireRules />
                        </div>
                    </Tab>
                    <Tab label="English" route="english">
                        <div className="rule-content">
                            <EnglishRules />
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
});


