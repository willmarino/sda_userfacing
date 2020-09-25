import React from 'react';
import LinRegChartContainer from '../charts/lin_reg_chart/lin_reg_chart_container';
// import NormalChartContainer from '../charts/normal_chart/normal_chart_container';
// import DiffChartContainer from '../charts/diff_chart/diff_chart_container';
// import MoonLoaderContainer from '../../../loaders/moon_loader_container';

class ChartDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      live: true,
      chartHeight: null,
      chartWidth: null
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
        this.executeLiveDataFeed();
      })
    this.bindChartDimensions()
  }
  switchLiveDataInterval(){
    console.log(`interval is ${this.dataFetchingInterval}, so im...`);
    if(this.dataFetchingInterval){
      console.log('closing interval')
      this.closeLiveDataFeed();
    }else{
      console.log('opening interval')
      this.executeLiveDataFeed()
    }
  }
  closeLiveDataFeed(){
    clearInterval(this.dataFetchingInterval);
    this.dataFetchingInterval = null;
  }
  executeLiveDataFeed(){
    const { fetchMostRecentPrediction } = this.props;
    this.dataFetchingInterval = setInterval(() => {
      fetchMostRecentPrediction()
    }, 1000);
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
    let { chartWidth, chartHeight } = this.state;
    return(
      <div className='chart-display-container' id="chart-display-container">
        <div className='chart-display-buttons'>
          {/* <p id="first-display-button" className='chart-display-button' onClick={this.changeChartType('normal')}>normal</p>
          <p className='chart-display-button' onClick={this.changeChartType('diff')}>diff</p> */}
          <p id="first-display-button" className='chart-display-button' onClick={this.switchLiveDataInterval}>Live</p>
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