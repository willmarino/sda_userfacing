const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Prediction = require('../models/prediction');


router.get("/", (req, res) => {
  Prediction.find()
    .then((predictionResponse) => {
      res.send(predictionResponse.slice(0, 50));
    })
})

module.exports = router;