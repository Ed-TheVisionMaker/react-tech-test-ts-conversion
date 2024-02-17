import React, { ChangeEvent, useState } from 'react';
const Dropdown: React.FC = () => {
  const [numberOfDrinks, setNumberOfDrinks] = useState(10);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const parsedNumber = parseInt(e.target.value);
    setNumberOfDrinks(parsedNumber);
  };

  const preventRefresh = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <form onSubmit={preventRefresh}>
      <label>Drinks Per Page</label>
      <select name='number' value={numberOfDrinks} onChange={handleChange}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
      </select>
    </form>
  );
};

export default Dropdown;
