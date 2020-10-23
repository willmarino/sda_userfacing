import React from 'react';
import LinRegChartContainer from '../charts/lin_reg_chart/lin_reg_chart_container';

class ChartDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartHeight: null,
      chartWidth: null,
      buttonActive: false
    }
    this.dataFetchingInterval = null;
    this.bindChartDimensions = this.bindChartDimensions.bind(this);
    this.executeLiveDataFeed = this.executeLiveDataFeed.bind(this);
    this.isActive = this.isActive.bind(this);
  }
  isActive(){
    const curDate = new Date();
    const day = curDate.getDay();
    const hours = curDate.getHours();
    if(day >= 1 && day <= 5){
      if(hours >= 9 && hours <= 16){
        return true;
      }
    }
    return false;
  }
  componentDidMount(){
    const { fetchPredictions, datafeedConfig, fetchConfig } = this.props;
    const { isLive } = datafeedConfig;

    this.executeLiveDataFeed();
    this.bindChartDimensions()
  }
  componentWillUnmount(){
    const { stopDatafeed } = this.props;
    stopDatafeed();
  }
  componentDidUpdate(prevProps){
    const { fetchConfig, fetchPredictions } = this.props;
    if(prevProps.fetchConfig !== fetchConfig && fetchConfig.timeframe === 'Live'){
      // refetch and start datafeed
      this.executeLiveDataFeed();
    }else if(prevProps.fetchConfig !== this.props.fetchConfig){
      // refetch
      fetchPredictions(fetchConfig);
    }
    
  }
  executeLiveDataFeed(){
    const { fetchPredictions, fetchMostRecentPrediction, startDatafeed, fetchConfig } = this.props;
    fetchPredictions(fetchConfig)
      .then(() => {
        if(this.isActive()){
          const interval = setInterval(() => {
            fetchMostRecentPrediction(fetchConfig.stock)
          }, 1000);
          startDatafeed(interval);
          this.setState({ buttonActive: true });
        }
      })
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
    const { datafeedConfig, stopDatafeed, startDatafeed, changeTimeframe } = this.props;
    const { chartWidth, chartHeight, buttonActive } = this.state;
    const ids = (datafeedConfig.live) ? 'chart-display-button-active' : null;
    const message = (datafeedConfig.live) ? 'Stop Live Datafeed' : 'Start Live Datafeed';
    const onClickFunc = (datafeedConfig.live) ? () => { stopDatafeed() } : () => { changeTimeframe('Live') };
    return(
      <div className='chart-display-container' id="chart-display-container">
        <div className='chart-display-buttons'>
          <p id={ids} className='chart-display-button' onClick={onClickFunc}>{message}</p>
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