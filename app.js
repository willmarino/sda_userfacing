const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').MongoURI;
const predictionRouter = require('./routes/predictions');
const bodyParser = require('body-parser')

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('db success'))
  .catch(() => console.log('db fail'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/predictions", predictionRouter);
app.listen(5005, () => console.log('listening on 5005'));