import { useState } from 'react';

import FirstTab from './FirstTab';
import SecondTab from './SecondTab';

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
        <FirstTab activeTab={activeTab}  />
        <SecondTab activeTab={activeTab} />
      </div>
    </div>
  );
};

export default App;
