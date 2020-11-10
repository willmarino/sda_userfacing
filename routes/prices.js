const express = require('express');
const router = express.Router();
const Prediction = require('../models/prediction');
const Curstock = require('../models/curstock');


router.get('/', (req, res) => {
  Curstock.find()
    .then((curStockResponse) => {
      const numStocks = curStockResponse.values.length;
      Prediction.find().sort({ id: -1 }).limit(numStocks * 2)
        .then((lastPredictionsResponse) => {
          let latestPrices = {};
          for(let i = lastPredictionsResponse.length - 1; i >= 0; i--){
            curPrediction = lastPredictionsResponse[i];
            if(!latestPrices[curPrediction.stock]){
              latestPrices[curPrediction.stock] = curPrediction.target;
            }
          }
          res.send(latestPrices);
        })
    })
})


module.exports = router;