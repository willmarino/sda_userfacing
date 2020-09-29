const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Prediction = require('../models/prediction');
const LC = require('../local_cache');
const filterDBData = require('../helpers/predictions_helpers');


router.get("/", (req, res) => {
  const filters = req.query;
  Prediction.find()
    .then((predictionResponse) => {
      const predictions = filterDBData(predictionResponse, filters);
      res.send(predictions);
    })
})

router.get("/most_recent", (req, res) => {
  Prediction.find().sort({ _id: -1 }).limit(1)
  // Prediction.find()
    .then((latestPrediction) => {
      // const latestPrediction = predictions[LC.cur];
      // LC.cur += 1;
      res.send(latestPrediction);
    })
})

module.exports = router;