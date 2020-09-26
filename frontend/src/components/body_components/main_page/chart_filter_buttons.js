import React from 'react';
import ChartFilterButton from '../../buttons/chart_filter_button/chart_filter_button';

const ChartFilterButtons = (props) => {
  const allFetchConfigOptions = {
    algorithm: ["Linear Regression", "SVM"],
    stock: ["TSLA", "AAPL"],
    timeframe: ["Recent", "Current Day"]

  }
  const { changeAlgorithm, changeStock, changeTimeframe, fetchConfig } = props;
  let { algorithm, stock, timeframe } = fetchConfig;
  debugger;
  return(
    <div className="chart-filter-buttons">
      <ChartFilterButton label="Algorithm" curOption={algorithm} options={allFetchConfigOptions.algorithm} changeFunc={changeAlgorithm}/>
      <ChartFilterButton label="Stock" curOption={stock} options={allFetchConfigOptions.stock} changeFunc={changeStock}/>
      <ChartFilterButton label="Timeframe" curOption={timeframe} options={allFetchConfigOptions.timeframe} changeFunc={changeTimeframe}/>
    </div>
  )
}

export default ChartFilterButtons;