import React, { ChangeEvent } from 'react';
import './DropdownMenu.css';

interface DropdownProps {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  numberOfDrinks: number;
}

const Dropdown: React.FC<DropdownProps> = ({
  handleChange,
  numberOfDrinks,
}) => {
  const preventRefresh = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className={'dropdown-container'}>
      <form onSubmit={preventRefresh}>
        <label className={'dropdown-dropdown-label'}>Drinks Per Page</label>
        <select
          className={'dropdown-dropdown-select'}
          name='number'
          value={numberOfDrinks}
          onChange={handleChange}
        >
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='30'>30</option>
        </select>
      </form>
    </div>
  );
};

export default Dropdown;
