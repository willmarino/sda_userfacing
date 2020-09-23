import React from 'react';
import FilterButton from '../../buttons/chart_filter_button/chart_filter_button';

const FilterButtons = () => {
  return(
    <div>
      {/* fb needs list of possibilities, label */}
      <FilterButton label="Algorithm" options={["Linear Regression"]} curOption={"Linear Regression"}/>
      <FilterButton label="Stock" options={["TSLA", "AAPL", "APTO"]} curOption={"TSLA"}/>
    </div>
  )
}

export default FilterButtons;