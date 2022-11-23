const FirstTab = ({ activeTab }) => {

  return (
    <div className={activeTab === 'Tab 2' ? 'hidden' : ''}>First Tab Content</div>
  )
};

export default FirstTab;