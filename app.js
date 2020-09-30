const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').MongoURI;
const predictionRouter = require('./routes/predictions');
const bodyParser = require('body-parser')

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('db success'))
  .catch(() => console.log('db fail'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/predictions", predictionRouter);
app.listen(5005, () => console.log('listening on 5005'));