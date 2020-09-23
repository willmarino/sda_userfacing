const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').MongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('db sucess'))
  .catch(() => console.log('db fail'))