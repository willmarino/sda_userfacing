import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';

// recharts notes
// name is label per point which is shown on x-axis, maybe timestamp for me
// uv and the value of the point according to the y axis, price for me
// pv ?
// amt?

class NormalChart extends React.Component{
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
        prediction: elem.prediction,
        target: elem.target
      }
    })
    debugger;
    return(
      <div className="chart-display">
        <LineChart width={ chartWidth } height={chartHeight} data={data}>
          <Legend verticalAlign="top" height={36}/>
          <Line type="monotone" dataKey="prediction" stroke="#1340bd" />
          <Line type="monotone" dataKey="target" stroke="#b31717" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name"/>
          <YAxis />
        </LineChart>
      </div>
    )
  }
}

export default NormalChart;