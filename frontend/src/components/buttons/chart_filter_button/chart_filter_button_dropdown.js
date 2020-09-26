import React from 'react';

const FilterButtonDropdown = (props) => {
  const { options } = props;
  const optionsListItems = options.map((option) => {
    return <li className="filter-button-dropdown-listitem" key={option}>{option}</li>;
  })
  return(
    <ul className="filter-button-dropdown-list">
      {optionsListItems}
    </ul>
  )
}

export default FilterButtonDropdown;