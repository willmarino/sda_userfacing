const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PredictionSchema = new Schema({
  stock: {
    type: String,
    required: true
  },
  target: {
    type: Number,
    required: true
  },
  prediction: {
    type: Number,
    required: true
  },
  algorithm: {
    type: String,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  }
})

const Prediction = mongoose.model('predictions', PredictionSchema);

module.exports = Prediction;