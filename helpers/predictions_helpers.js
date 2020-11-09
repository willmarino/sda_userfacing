

const filterDBData = (data) => {
  let res = [];
  let divisor = Math.floor(data.length / 100);
  let i = 0;
  let j = 1;
  while (i < data.length){
    const curDatum = data[i];
    if(j === divisor){
      if(curDatum.prediction < (curDatum.target * 1.1) && curDatum.prediction > (curDatum.target * (0.5))){
        res.push(curDatum);
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
  let curHours = date.getHours();
  let curMinutes = date.getMinutes();
  let curSeconds = date.getSeconds();

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