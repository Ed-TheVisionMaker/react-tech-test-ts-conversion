import React, { ChangeEvent } from 'react';

interface DropdownProps {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  numberOfDrinks: number;
}

const Dropdown: React.FC<DropdownProps> = ({ handleChange, numberOfDrinks }) => {

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
