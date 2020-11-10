const ss = require('simple-statistics');

const filterDBData = (data) => {
  const res = [];

  const targetData = data.map((el) => el.target);
  const predictionData = data.map((el) => el.prediction);
  const upperBound = ss.mean(targetData) + (ss.standardDeviation(targetData) * 5)
  const lowerBound = ss.mean(targetData) - (ss.standardDeviation(targetData) * 5)

  console.log(upperBound);
  console.log(lowerBound);

  const divisor = Math.floor(data.length / 200);
  let i = 0;
  let j = 1;
  while (i < data.length){
    const curData = data[i];
    const curPrediction = predictionData[i];
    if(j === divisor){
      if(curPrediction > lowerBound && curPrediction < upperBound){
        res.push(curData);
      }
      j = 1;
    }else{
      j += 1;
    }
    i += 1
  }
  return res;
}

const computeTimeLimits = (gap) => {
  let date = new Date();
  let curDay = date.getDay();
  const curHours = date.getHours();
  const curMinutes = date.getMinutes();
  const curSeconds = date.getSeconds();

  let millisecondsBack = ( curHours * 60 * 60 * 1000) + (curMinutes * 60 * 1000) + (curSeconds * 1000);
  if(gap === 'Current Week'){
    let daysElapsed = 0;
    while (curDay !== 1){
      curDay = (curDay === 0) ? 6 : curDay - 1;
      daysElapsed += 1;
    }
    millisecondsBack += daysElapsed * 24 * 60 * 60 * 1000;
  }

  return date.getTime() - millisecondsBack;

}

module.exports = {
  filterDBData,
  computeTimeLimits
};