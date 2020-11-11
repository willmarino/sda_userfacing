const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LatestPriceSchema = new Schema({
  stock: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

const LatestPrice = mongoose.model('latest_prices', LatestPriceSchema);

module.exports = LatestPrice;