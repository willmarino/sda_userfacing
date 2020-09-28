import React from 'react';

const FilterButtonDropdown = (props) => {
  const { options, changeFunc, switchDropdown, stopDatafeed } = props;
  const handleClick = (option) => {
    return () => {
      changeFunc(option);
      stopDatafeed();
      switchDropdown();
    }
  }
  const optionsListItems = options.map((option) => {
    // return <li className="filter-button-dropdown-listitem" key={option} onClick={() => {changeFunc(option); switchDropdown();}}>{option}</li>;
    return <li className="filter-button-dropdown-listitem" key={option} onClick={handleClick(option)}>{option}</li>;
  })
  return(
    <ul className="filter-button-dropdown-list">
      {optionsListItems}
    </ul>
  )
}

export default FilterButtonDropdown;