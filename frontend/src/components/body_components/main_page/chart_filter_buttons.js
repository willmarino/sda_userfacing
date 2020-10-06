import React from 'react';
import ChartFilterButton from '../../buttons/chart_filter_button/chart_filter_button';
import ExecFetchButtonContainer from '../../buttons/execute_fetch_button/execute_fetch_button_container';
import { fetchAvailableStocks } from '../../../util/curstock_util';

// const ChartFilterButtons = (props) => {
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
      // stock: ["TSLA"],
      stock: this.state.availableStocks,
      timeframe: ["Live", "Current Day"]

    }
    const { changeAlgorithm, changeStock, changeTimeframe, fetchConfig, stopDatafeed } = this.props;
    let { algorithm, stock, timeframe } = fetchConfig;
    return(
      <div className="chart-filter-buttons-container">
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
}

export default ChartFilterButtons;