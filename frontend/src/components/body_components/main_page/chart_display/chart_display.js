import React from 'react';
import ChartFilterButtonsContainer from '../chart_filter_buttons_container';
import CircularProgress from '@material-ui/core/CircularProgress';
// import LinRegChartContainer from '../charts/lin_reg_chart/lin_reg_chart_container';
import LinRegChart from '../charts/lin_reg_chart/lin_reg_chart';

class ChartDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartHeight: null,
      chartWidth: null,
      loading: true
    }
    this.dataFetchingInterval = null;
    this.bindChartDimensions = this.bindChartDimensions.bind(this);
    this.executeLiveDataFeed = this.executeLiveDataFeed.bind(this);
    this.afterFirstRender = this.afterFirstRender.bind(this);
  }
  componentDidMount(){
    const { fetchPredictions, datafeedConfig, fetchConfig } = this.props;

    fetchPredictions(fetchConfig)
      .then(() => {
        if(fetchConfig.timeframe === 'Live'){
          this.executeLiveDataFeed();
        }
        // this.bindChartDimensions()
      })
  }
  componentWillUnmount(){
    const { stopDatafeed } = this.props;
    stopDatafeed();
  }
  componentDidUpdate(prevProps, prevState){
    const { fetchPredictions, fetchConfig, stopDatafeed } = this.props;

    if(prevState.loading){
      this.afterFirstRender()
    }

    if(prevProps.fetchConfig !== this.props.fetchConfig){
      if(prevProps.fetchConfig.timeframe === 'Live'){
        stopDatafeed();
      }
      fetchPredictions(fetchConfig)
        .then(() => {
          if(this.props.fetchConfig.timeframe === 'Live'){
            this.executeLiveDataFeed();
          }
        })
    }
    
  }
  executeLiveDataFeed(){
    const { fetchMostRecentPrediction, startDatafeed, fetchConfig } = this.props;
    const interval = setInterval(() => {
      fetchMostRecentPrediction(fetchConfig.stock)
    }, 1000);
    startDatafeed(interval);
    this.setState({ buttonActive: true });
  }
  bindChartDimensions(){
    const chartContainer = document.getElementById('chart-display-container');
    const chartHeight = chartContainer.clientHeight * 0.8;
    const chartWidth = chartContainer.clientWidth * 0.9;
    window.addEventListener('resize', () => {
      this.setState({
        chartHeight: chartContainer.clientHeight * 0.8,
        chartWidth: chartContainer.clientWidth * 0.9})
    })
    this.setState({ chartHeight, chartWidth });
  }
  afterFirstRender(){
    this.setState({ loading: false });
    this.bindChartDimensions();
  }

  render(){
    const { predictions } = this.props
    const { chartWidth, chartHeight, loading } = this.state;

    let chart;
    if(!predictions || Object.keys(predictions).length === 0 || loading){
      chart = (
        <div className='progress-container'>
          <CircularProgress />
        </div>
      );
    }else{
      chart = <LinRegChart chartHeight={chartHeight} chartWidth={chartWidth} predictions={predictions}/>
    }

    return(
      <div className='chart-display-container' id="chart-display-container">
        <div className='chart-display-buttons'>
          <ChartFilterButtonsContainer/>
        </div>
        {chart}
        {/* <LinRegChart
          chartHeight={chartHeight}
          chartWidth={chartWidth}
          predictions={predictions} */}
        {/* /> */}
      </div>
    )
  }
}

export default ChartDisplay;