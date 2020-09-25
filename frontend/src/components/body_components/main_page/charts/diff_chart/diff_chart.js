import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


class DiffChart extends React.Component{
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
        diff: Math.abs(elem.prediction - elem.target),
      }
    })
    return(
      <div className="chart-display">
        <LineChart width={ 800 } height={500} data={data}>
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