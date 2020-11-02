import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';

class LinRegChart extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { predictions, chartHeight, chartWidth } = this.props;
    if(!predictions || Object.keys(predictions).length === 0){
      return null;
    }
    let max = Math.max(predictions[0].prediction, predictions[0].target);
    let min = Math.min(predictions[0].prediction, predictions[0].target);
    const data = [];
    predictions.forEach((elem) => {
      data.push({prediction: elem.prediction, target: elem.target });
      max = Math.round(Math.max(max, elem.prediction, elem.target));
      min = Math.round(Math.min(min, elem.prediction, elem.target));
    })
    console.log(min, max);
    const ticks = [min];
    const diff = max - min;
    const numSteps = 5
    const step = Math.round(diff / numSteps);
    for(let i = 1; i < numSteps - 1; i++){
      ticks.push(Math.round(min + (step * i)));
    }
    ticks.push(max);
    console.log(ticks);
    return(
      <div className="chart-display">
        <LineChart width={ chartWidth } height={chartHeight} data={data}>
          <Legend verticalAlign="top" height={36}/>
          <Line type="monotone" dataKey="prediction" stroke="#1340bd" />
          <Line type="monotone" dataKey="target" stroke="#b31717" strokeWidth={3} />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name"/>
          <YAxis type="number" domain={[min, max]} ticks={ticks}/>
        </LineChart>
      </div>
    )
  }
}

export default LinRegChart;