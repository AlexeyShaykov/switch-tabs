import { useState, useEffect } from 'react';

const SecondTab = ({ activeTab }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputValue = ({ target: { value } }) => {
    setInputValue(value);
  };

  useEffect(() => {
    console.log('here is mount SecondTab ');
  }, []);

  return (
    <form className={activeTab === 'Tab 1' ? 'hidden' : ''}>
      <label htmlFor="input">Here is label</label>
      <input type="text" id="input" value={inputValue} onChange={onInputValue} />
    </form>
  )
};

export default SecondTab;