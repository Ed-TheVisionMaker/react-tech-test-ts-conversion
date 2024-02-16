import React from 'react'
const Dropdown: React.FC = () => {
    return (
        <form action="#">
      <label >Drinks Per Page</label>
      <select name="number">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <input type="submit" value="Submit" />
</form>


    )
};

export default Dropdown;