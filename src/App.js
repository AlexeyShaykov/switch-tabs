import React, { useState } from 'react';

import FirstTab from './FirstTab';
import SecondTab from './SecondTab';

const Offscreen = React.unstable_Offscreen;

const App = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  const onSetActiveTab = (tabName) => () => {
    setActiveTab(tabName)
  };

  return (
    <div>
      <div className="tabs">
        <div className={`tab ${activeTab === 'Tab 1' ? 'tab_active' : ''}`} onClick={onSetActiveTab('Tab 1')}>Tab 1</div>
        <div className={`tab ${activeTab === 'Tab 2' ? 'tab_active' : ''}`} onClick={onSetActiveTab('Tab 2')}>Tab 2</div>
      </div>
      <div className="tab-content">
      <Offscreen mode={activeTab === 'Tab 1' ? 'visible' : 'hidden'}>
        <FirstTab />
      </Offscreen>
      <Offscreen mode={activeTab === 'Tab 2' ? 'visible' : 'hidden'}>
        <SecondTab />
      </Offscreen>
      </div>
    </div>
  );
};

export default App;
