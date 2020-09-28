import React from 'react';
import ChartFilterButton from '../../buttons/chart_filter_button/chart_filter_button';
import ExecFetchButtonContainer from '../../buttons/execute_fetch_button/execute_fetch_button_container';

const ChartFilterButtons = (props) => {
  const allFetchConfigOptions = {
    algorithm: ["Linear Regression"],
    stock: ["TSLA"],
    timeframe: ["Recent", "Current Day"]

  }
  const { changeAlgorithm, changeStock, changeTimeframe, fetchConfig, stopDatafeed } = props;
  let { algorithm, stock, timeframe } = fetchConfig;
  return(
    <div className="chart-filter-buttons-container">
      <p className='floating-warning'>* Using filters to look for specific prediction data will stop the live data feed if it is running *</p>
      <div className="chart-filter-buttons">
        <ChartFilterButton
          label="Algorithm"
          curOption={algorithm}
          options={allFetchConfigOptions.algorithm}
          changeFunc={changeAlgorithm}
          stopDatafeed={stopDatafeed}/>
        <ChartFilterButton
          label="Stock"
          curOption={stock}
          options={allFetchConfigOptions.stock}
          changeFunc={changeStock}
          stopDatafeed={stopDatafeed}/>
        <ChartFilterButton
          label="Timeframe"
          curOption={timeframe}
          options={allFetchConfigOptions.timeframe}
          changeFunc={changeTimeframe}
          stopDatafeed={stopDatafeed}/>
      </div>
    </div>
  )
}

export default ChartFilterButtons;