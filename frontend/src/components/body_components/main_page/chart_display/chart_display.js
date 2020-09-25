import React from 'react';
import NormalChartContainer from '../charts/normal_chart/normal_chart_container';
import DiffChartContainer from '../charts/diff_chart/diff_chart_container';
import MoonLoaderContainer from '../../../loaders/moon_loader_container';

class ChartDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartHeight: null,
      chartWidth: null,
      chartType: 'normal'
    }
  }
  componentDidMount(){
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
  changeChartType(type){
    return () => {
      this.setState({ chartType: type });
    }
  }
  render(){
    let { chartType, chartHeight, chartWidth } = this.state;
    let chart;
    if(chartType === 'normal'){
      chart = <NormalChartContainer chartHeight={chartHeight} chartWidth={chartWidth}/>;
    }else if(chartType === 'diff'){
      chart = <DiffChartContainer chartHeight={chartHeight} chartWidth={chartWidth}/>;
    }
    return(
      <div className='chart-display-container' id="chart-display-container">
        <div className='chart-display-buttons'>
          <p id="first-display-button" className='chart-display-button' onClick={this.changeChartType('normal')}>normal</p>
          <p className='chart-display-button' onClick={this.changeChartType('diff')}>diff</p>
        </div>
        {chart}
      </div>
    )
  }
}

export default ChartDisplay;