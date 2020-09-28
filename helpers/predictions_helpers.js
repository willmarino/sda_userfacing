

const filterDBData = (data, filters) => {
  data = filterDBDataByTime(data, filters.timeframe);
  data = filterDBDataByAlgo(data, filters.algorithm);
  data = filterDBDataByStock(data, filters.stock);
  return data;
}
const filterDBDataByTime = (data, time) => {
  let res = [];
  if(time === "Recent"){
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