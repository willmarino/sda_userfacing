const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Prediction = require('../models/prediction');


router.get("/", (req, res) => {
  Prediction.find()
    .then((predictionResponse) => {
      res.send(predictionResponse);
    })
})

router.get("/most_recent", (req, res) => {
  Prediction.find().sort({ _id: -1 }).limit(1)
    .then((latestPrediction) => {
      res.send(latestPrediction);
    })
})

module.exports = router;