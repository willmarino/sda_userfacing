import React from 'react';
import NormalChartContainer from '../charts/normal_chart/normal_chart_container';
import DiffChartContainer from '../charts/diff_chart/diff_chart_container';
import MoonLoaderContainer from '../../../loaders/moon_loader_container';

class ChartDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      chartType: 'normal'
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({loading: false});
    }, 1000)
  }
  changeChartType(type){
    return () => {
      this.setState({ chartType: type });
    }
  }
  render(){
    let { loading, chartType } = this.state;
    let chart;
    // if(loading){
    //   return <MoonLoaderContainer/>;
    // }
    if(chartType === 'normal'){
      chart = <NormalChartContainer/>;
    }else if(chartType === 'diff'){
      chart = <DiffChartContainer changeChartType={this.changeChartType('diff')}/>;
    }
    return(
      <div className='chart-display-container'>
        <div className='chart-display-buttons'>
          <p className='chart-display-button' onClick={this.changeChartType('normal')}>normal</p>
          <p className='chart-display-button' onClick={this.changeChartType('diff')}>diff</p>
        </div>
        {chart}
      </div>
    )
  }
}

export default ChartDisplay;