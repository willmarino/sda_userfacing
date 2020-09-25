import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

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
    const { predictions } = this.props;
    if(!predictions || Object.keys(predictions).length === 0){
      return null;
    }
    const data = predictions.map((elem) => {
      return {
        // name: 'x',
        prediction: elem.prediction,
        target: elem.target
      }
    })
    return(
      <div className="chart-display">
        <LineChart width={ 800 } height={500} data={data}>
          <Line type="monotone" dataKey="prediction" stroke="#8884d8" />
          <Line type="monotone" dataKey="target" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    )
  }
}

export default NormalChart;