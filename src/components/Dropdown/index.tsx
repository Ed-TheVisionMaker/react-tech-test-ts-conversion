import React, { useState } from 'react';
const Dropdown: React.FC = () => {
    const [numberOfDrinks, setNumberOfDrinks] = useState(10);

    const onSubmit = () => {
        // e.preventDefault();
        console.log("changed")
    };

  return (
    <form action='#'>
      <label>Drinks Per Page</label>
      <select name='number' onChange={onSubmit}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
      </select>
      <input type='submit' value='Submit' />
    </form>
  );
};

export default Dropdown;
