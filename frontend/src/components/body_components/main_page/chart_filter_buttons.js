import React from 'react';
import FilterButton from '../../buttons/chart_filter_button/chart_filter_button';

const ChartFilterButtons = () => {
  return(
    <div className="chart-filter-buttons">
      <FilterButton label="Algorithm" options={["Linear Regression", 'SVM']} curOption={"Linear Regression"}/>
      <FilterButton label="Stock" options={["TSLA", "AAPL"]} curOption={"TSLA"}/>
    </div>
  )
}

export default ChartFilterButtons;