import React from 'react';
import {Tab, Tabs} from 'material-ui';

import SoftwireRules from './SoftwireRules';
import EnglishRules from './EnglishRules';


export default React.createClass({
  _onActive(tab){
      this.context.router.transitionTo(tab.props.route);
  },

  render() {
    return (
      <div className="rule-tabs">
        <Tabs>
          <Tab label="Softwire" route="softwire">
            <div className="rule-content"><SoftwireRules /></div>
          </Tab>
          <Tab label="English" route="english">
            <div className="rule-content"><EnglishRules className="rule-content" /></div>
          </Tab>
        </Tabs>
      </div>
    );
  }
});
