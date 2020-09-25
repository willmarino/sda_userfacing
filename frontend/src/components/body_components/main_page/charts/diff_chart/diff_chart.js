import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';


class DiffChart extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const { fetchPredictions } = this.props;
    fetchPredictions();
  }

  render(){
    const { predictions, chartHeight, chartWidth } = this.props;
    if(!predictions || Object.keys(predictions).length === 0){
      return null;
    }
    const data = predictions.map((elem) => {
      return {
        diff: Math.abs(elem.prediction - elem.target),
      }
    })
    return(
      <div className="chart-display">
        <LineChart width={ chartWidth } height={chartHeight} data={data}>
          <Legend verticalAlign="top" height={36}/>
          <Line type="monotone" dataKey="diff" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    )
  }
}

export default DiffChart;