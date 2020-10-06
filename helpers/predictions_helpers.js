

const filterDBData = (data, filters) => {
  let res = [];
  data = filterDBDataByTime(data, filters.timeframe);
  data = filterDBDataByAlgo(data, filters.algorithm);
  data = filterDBDataByStock(data, filters.stock);
  if(filters.timeframe === 'Live'){
    return data;
  }else{
    let divisor = Math.floor(data.length / 100);
    let i = 0;
    let j = 1;
    while (i < data.length){
      const curDatum = data[i];
      if(j === divisor){
        res.push(curDatum);
        j = 1;
      }else{
        j += 1;
      }
      i += 1
    }
    return res;
  }
}
const filterDBDataByTime = (data, time) => {
  let res = [];
  if(time === "Live"){
    return data.slice(-50);
  }else if(time === "Current Day"){
    let startOfDay = new Date().setHours(0, 0, 0, 0);
    data.forEach((d) => {
      if(d.timestamp > startOfDay){
        res.push(d);
      }
    })
    return res;
  }
}
const filterDBDataByStock = (data, stock) => {

  return data.filter(d => d.stock === stock);
}
const filterDBDataByAlgo = (data, algo) => {
  return data.filter(d => d.algorithm === algo);
}

module.exports = filterDBData;