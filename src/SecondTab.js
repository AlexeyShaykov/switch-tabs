import { useState, useEffect } from 'react';

const SecondTab = () => {
  const [inputValue, setInputValue] = useState('');

  const onInputValue = ({ target: { value } }) => {
    setInputValue(value);
  };

  useEffect(() => {
    console.log('here is mount SecondTab ');
  }, []);

  return (
    <form>
      <label htmlFor="input">Here is label</label>
      <input type="text" id="input" value={inputValue} onChange={onInputValue} />
    </form>
  )
};

export default SecondTab;