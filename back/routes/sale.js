const express = require('express');
const router = express.Router();
const Item = require('../models/itemModel');
const Meal = require('../models/mealModel');

// 搜尋所有項目
router.get('/item', async (req, res, next) => {
  try {
    const data = await Item.find().populate({
      path: 'product',
      populate: {
        path: 'customization',
      }
    });
    res.status(200).json({
      "success": true,
      data
    });
  }
  catch (error) {
    console.log(error);
  }
});

// 新增單一項目
router.post('/item', async (req, res, next) => {
  const { product, name, stock } = req.body;
  const newItem = { product, name, stock };
  try {
    const data = await Item.create(newItem);
    res.status(200).json({
      "success": true,
      data
    });
  }
  catch (error) {
    console.log(error);
  }
});

// 編輯單一項目
router.patch('/item', async (req, res, next) => {
  const { _id, product, name, stock } = req.body;
  const updateItem = { product, name, stock };
  try {
    const data = await Item.findByIdAndUpdate(
      _id,
      updateItem,
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

// 移除單一項目
router.delete('/item', async (req, res, next) => {
  const { _id, isRemoved } = req.body;
  const removeItem = { isRemoved };
  try {
    const data = await Item.findByIdAndUpdate(
      _id,
      removeItem,
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

// 搜尋所有套餐
router.get('/meal', async (req, res, next) => {
  try {
    const data = await Meal.find();
    res.status(200).json({
      "success": true,
      data
    });
  }
  catch (error) {
    console.log(error);
  }
});

// 新增單一套餐
router.post('/meal', async (req, res, next) => {
  // const { product, name, stock } = req.body;
  // const newItem = { product, name, stock };
  // try {
  //   const data = await Item.create(newItem);
  //   res.status(200).json({
  //     "success": true,
  //     data
  //   });
  // }
  // catch (error) {
  //   console.log(error);
  // }
});

module.exports = router;