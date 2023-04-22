const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.get('/', async (req, res, next) => {
  const data = await Product.find();
  res.status(200).json({
    data
  });
});
router.post('/', async (req, res, next) => {
  const add = {
    name: 'cat333'
  }
  const data = await Product.create(add);
  res.status(200).json({
    data
  });

});

module.exports = router;