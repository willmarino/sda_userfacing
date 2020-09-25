const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Prediction = require('../models/prediction');
const LC = require('../local_cache');


router.get("/", (req, res) => {
  Prediction.find()
    .then((predictionResponse) => {
      res.send(predictionResponse.slice(0, 20));
    })
})

router.get("/most_recent", (req, res) => {
  // Prediction.find().sort({ _id: -1 }).limit(1)
  Prediction.find()
    .then((predictions) => {
      const latestPrediction = predictions[LC.cur];
      LC.cur += 1;
      res.send(latestPrediction);
    })
})

module.exports = router;