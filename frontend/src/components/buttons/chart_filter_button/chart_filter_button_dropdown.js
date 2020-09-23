import React from 'react';

const FilterButtonDropdown = (props) => {
  const { options } = props;
  const optionsListItems = options.map((option) => {
    return <li>{option}</li>;
  })
  return(
    <ul>
      {optionsListItems}
    </ul>
  )
}

export default FilterButtonDropdown;