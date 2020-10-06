const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CurstockSchema = new Schema({
  values: {
    type: Array,
    required: true
  }
})

const Curstock = mongoose.model('curstocks', CurstockSchema);

module.exports = Curstock;