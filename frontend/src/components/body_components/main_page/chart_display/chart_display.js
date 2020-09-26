import React from 'react';
import LinRegChartContainer from '../charts/lin_reg_chart/lin_reg_chart_container';

class ChartDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      startLive: false,
      chartHeight: null,
      chartWidth: null,
      buttonActive: false
    }
    this.dataFetchingInterval = null;
    this.bindChartDimensions = this.bindChartDimensions.bind(this);
    this.executeLiveDataFeed = this.executeLiveDataFeed.bind(this);
    this.closeLiveDataFeed = this.closeLiveDataFeed.bind(this);
    this.switchLiveDataInterval = this.switchLiveDataInterval.bind(this);
  }
  componentDidMount(){
    const { fetchPredictions } = this.props;

    fetchPredictions()
      .then(() => {
        if(this.state.startLive){
          this.executeLiveDataFeed();
        }
      })
    this.bindChartDimensions()
  }
  componentWillUnmount(){
    this.closeLiveDataFeed();
  }
  switchLiveDataInterval(){
    if(this.dataFetchingInterval){
      this.closeLiveDataFeed();
    }else{
      this.executeLiveDataFeed();
    }
  }
  closeLiveDataFeed(){
    clearInterval(this.dataFetchingInterval);
    this.dataFetchingInterval = null;
    this.setState({ buttonActive: false });
  }
  executeLiveDataFeed(){
    const { fetchMostRecentPrediction } = this.props;
    this.dataFetchingInterval = setInterval(() => {
      fetchMostRecentPrediction()
    }, 1000);
    this.setState({ buttonActive: true });
  }
  bindChartDimensions(){
    const chartContainer = document.getElementById('chart-display-container');
    const chartHeight = chartContainer.clientHeight * 0.9;
    const chartWidth = chartContainer.clientWidth * 0.7;
    window.addEventListener('resize', () => {
      this.setState({
        chartHeight: chartContainer.clientHeight * 0.9,
        chartWidth: chartContainer.clientWidth * 0.7})
    })
    this.setState({ chartHeight, chartWidth });
  }
  render(){
    let { chartWidth, chartHeight, buttonActive } = this.state;
    const ids = (buttonActive) ? 'chart-display-button-active' : null;
    const message = (buttonActive) ? 'Stop Live Datafeed' : 'Start Live Datafeed';
    return(
      <div className='chart-display-container' id="chart-display-container">
        <div className='chart-display-buttons'>
          <p id={ids} className='chart-display-button' onClick={this.switchLiveDataInterval}>{message}</p>
        </div>
        <LinRegChartContainer
          chartHeight={chartHeight}
          chartWidth={chartWidth}
        />
      </div>
    )
  }
}

export default ChartDisplay;