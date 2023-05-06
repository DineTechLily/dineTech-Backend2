const express = require('express');
const router = express.Router();
const Customization = require('../models/customizationModel');

// 搜尋所有客製化選項
router.get('/', async (req, res, next) => {
  try {
    const data = await Customization.find();
    res.status(200).json({
      "success": true,
      data
    });
  }
  catch (error) {
    console.log(error);
  }
});

// 新增單一客製化選項
router.post('/', async (req, res, next) => {
  const { category, name, cost, price, description, img } = req.body;
  const newCustomization = { category, name, cost, price, description, img };
  try {
    const data = await Customization.create(newCustomization);
    res.status(200).json({
      "success": true,
      data
    });
  }
  catch (error) {
    console.log(error);
  }
});

// 編輯單一客製化選項
router.patch('/', async (req, res, next) => {
  const { _id, category, name, cost, price, description, img } = req.body;
  const updateCustomization = { category, name, cost, price, description, img };
  try {
    const data = await Customization.findByIdAndUpdate(
      _id,
      updateCustomization,
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

// 移除單一客製化選項
router.delete('/', async (req, res, next) => {
  const { _id, isRemoved } = req.body;
  const removeCustomization = { isRemoved };
  try {
    const data = await Customization.findByIdAndUpdate(
      _id,
      removeCustomization,
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