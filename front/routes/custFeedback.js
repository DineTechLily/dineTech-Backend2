const express = require('express');
const router = express.Router();
const Feedback = require('../models/custFeedbackModel');

router.post('/', async function (req, res, next) {
  const { quality, process, speed, flavor, price, sanitation, impress, feeback } = req.body;
  const newFeedback = { quality, process, speed, flavor, price, sanitation, impress, feeback};
  try {
    const data = await Feedback.create(newFeedback);
    res.status(200).json({
      "success": true,
      "message": "send data success",
      "data": data
    });
  }
  catch (error) {
    res.status(400).json({
      "message": error
    })
  }
});

module.exports = router;