const express = require('express');
const mongoose = require('mongoose');
const app = express();
const predictionRouter = require('./routes/predictions');
const availableStocksRouter = require('./routes/available_stocks');
const db = require('./config/keys').MongoURI;
const bodyParser = require('body-parser')
const path = require('path');
require('dotenv').config();

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('db success'))
  .catch(() => console.log('db fail'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5005;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/predictions", predictionRouter);
app.use("/available_stocks", availableStocksRouter);
app.listen(port, () => console.log('listening'));