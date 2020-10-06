const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Curstock = require('../models/curstock');


router.get('/', (req, res) => {
  Curstock.find()
    .then((curStockResp) => {
      res.send(curStockResp[0].values);
    })
})

module.exports = router;