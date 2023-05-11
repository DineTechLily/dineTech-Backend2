const express = require('express');
const router = express.Router();
const Discount = require('../models/discountModel');


// 搜尋所有折扣
router.get('/', async (req, res, next) => {
  try {
    const data = await Discount.find();
    res.status(200).json({
      "success": true,
      data
    });
  }
  catch (error) {
    console.log(error);
  }
});

// 新增單一折扣
router.post('/', async (req, res, next) => {
  const { name,category, stock,expiration,symbol,discountValue } = req.body;
  const newDiscount = { name,category, stock,expiration,symbol,discountValue  };
  try {
     const data = await Discount.create(newDiscount);
    res.status(200).json({
      "success": true,
       data
    });
  }
  catch (error) {
    console.log(error);
  }
});

//  編輯單一折扣
router.patch('/', async (req, res, next) => {
  const { _id,name,category, stock,expiration,symbol,discountValue  } = req.body;
  const updateDiscount = { name,category, stock,expiration,symbol,discountValue  };
  try {
    const data = await Discount.findByIdAndUpdate(
      _id,
      updateDiscount,
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

// 移除單一折扣
router.delete('/', async (req, res, next) => {
  const { _id, isRemoved } = req.body;
  const removeDiscount = { isRemoved };
  try {
    const data = await Discount.findByIdAndUpdate(
      _id,
      removeDiscount,
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