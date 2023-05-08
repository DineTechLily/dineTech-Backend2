const express = require('express');
const router = express.Router();
const Menu = require('../models/menuModel');

router.get('/', async (_, res, next) => {
  try {
    const data = await Menu.find()

    res.status(200).json({
      "success": true,
      "data": data
    });
  }
  catch (error) {
    console.log(error);
  }
});

module.exports = router;