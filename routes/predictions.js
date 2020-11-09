const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Prediction = require('../models/prediction');
const LC = require('../local_cache');
const filterDBData = require('../helpers/predictions_helpers').filterDBData;
const computeTimeLimits = require('../helpers/predictions_helpers').computeTimeLimits;


router.get("/", (req, res) => {
  const filters = req.query;
  if(filters.timeframe === 'Live'){
    Prediction.find( { stock: req.query.stock, algorithm: req.query.algorithm } ).sort({ _id: -1 }).limit(100)
      .then((predictionResponse) => {
        res.send(filterDBData(predictionResponse));
      })
  }else{
    const bottomTime = computeTimeLimits(filters.timeframe)
    Prediction.find( { stock: req.query.stock, algorithm: req.query.algorithm, timestamp: { $gte: bottomTime } } )
      .then((predictionResponse) => {
        res.send(filterDBData(predictionResponse));
      })

  }
})

router.get("/most_recent", (req, res) => {
  Prediction.find( {stock: req.query.stock} ).sort({ _id: -1 }).limit(1)
    .then((latestPrediction) => {
      res.send(latestPrediction);
    })
})

module.exports = router;