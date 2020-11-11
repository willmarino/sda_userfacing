const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecentPredictionSchema = new Schema({
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

const RecentPrediction = mongoose.model('recent_predictions', RecentPredictionSchema);

module.exports = RecentPrediction;