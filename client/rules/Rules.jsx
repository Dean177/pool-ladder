import React from 'react';
import { TabbedArea, TabPane } from 'react-bootstrap';

import SoftwireRules from './SoftwireRules';
import EnglishRules from './EnglishRules';


export default React.createClass({

  render() {
    return (
      <div className="Rules">
        <TabbedArea defaultActiveKey={1}>
          <TabPane tab="Softwire" eventKey={1}>
            <div className="rule-content"><SoftwireRules /></div>
          </TabPane>
          <TabPane tab="English" eventKey={2}>
            <div className="rule-content"><EnglishRules /></div>
          </TabPane>
        </TabbedArea>
      </div>
    );
  }
});
