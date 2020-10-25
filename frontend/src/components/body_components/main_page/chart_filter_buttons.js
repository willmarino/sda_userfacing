import React from 'react';
import { fetchAvailableStocks } from '../../../util/curstock_util';
import MuiChartFilterButton from '../../buttons/chart_filter_button/mui_chart_select';

class ChartFilterButtons extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      availableStocks: null
    }
  }

  componentDidMount(){
    fetchAvailableStocks()
      .then((availableStocksResponse) => {
        this.setState({ availableStocks: availableStocksResponse.data })
      })
  }

  render(){
    if(!this.state.availableStocks){
      return null;
    }
    const allFetchConfigOptions = {
      algorithm: ["Linear Regression"],
      stock: this.state.availableStocks,
      timeframe: ["Live", "Current Day"]

    }
    const { changeAlgorithm, changeStock, changeTimeframe, fetchConfig, stopDatafeed } = this.props;
    let { algorithm, stock, timeframe } = fetchConfig;
    return(
      <div className="chart-filter-buttons-container">
        <div className="chart-filter-buttons">
          <MuiChartFilterButton
            label="Algorithm"
            curOption={algorithm}
            options={allFetchConfigOptions.algorithm}
            changeFunc={changeAlgorithm}
            stopDatafeed={stopDatafeed}/>
          <MuiChartFilterButton
            label="Stock"
            curOption={stock}
            options={allFetchConfigOptions.stock}
            changeFunc={changeStock}
            stopDatafeed={stopDatafeed}/>
          <MuiChartFilterButton
            label="Timeframe"
            curOption={timeframe}
            options={allFetchConfigOptions.timeframe}
            changeFunc={changeTimeframe}
            stopDatafeed={stopDatafeed}/>
        </div>
      </div>
    )
  }
}

export default ChartFilterButtons;