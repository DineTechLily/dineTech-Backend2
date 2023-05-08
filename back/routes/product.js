const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// 搜尋所有商品
router.get('/', async (req, res, next) => {
  try {
    const data = await Product.find()
    // .populate({
    //   path: 'customization'
    // });
    res.status(200).json({
      "success": true,
      data
    });
  }
  catch (error) {
    console.log(error);
  }
});


// 新增單一商品
router.post('/', async (req, res, next) => {
  const { category, name, cost, price, description, img, customization } = req.body;
  const newProduct = { category, name, cost, price, description, img, customization };
  try {
    const data = await Product.create(newProduct);
    res.status(200).json({
      "success": true,
      data
    });
  }
  catch (error) {
    // console.log(error);
    res.status(400).json({
      "message": error
    })
  }
});

// 編輯單一商品
router.patch('/', async (req, res, next) => {
  const { _id, category, name, cost, price, description, img, customization } = req.body;
  const updateProduct = { category, name, cost, price, description, img, customization };
  try {
    const data = await Product.findByIdAndUpdate(
      _id,
      updateProduct,
      { new: true, }
    );
    res.status(200).json({
      "success": true,
      data
    });
  }
  catch (error) {
    console.log(error);
  }
});

// 移除單一商品
router.delete('/', async (req, res, next) => {
  const { _id, isRemoved } = req.body;
  const removeProduct = { isRemoved };
  try {
    const data = await Product.findByIdAndUpdate(
      _id,
      removeProduct,
      { new: true, }
    );
    res.status(200).json({
      "success": true,
      data
    });
  }
  catch (error) {
    console.log(error);
  }
});

module.exports = router;