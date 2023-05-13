const express = require('express');
const router = express.Router();
const Guest = require('../models/custGuestModel');

router.post('/', async function (req, res, next) {
  const { time, table, people} = req.body;

  // const table_id = generateTableId( time, table, people );

  // const newGuest = { time, table, people, table_id };
  const newGuest = { time, table, people };
  try {
    const data = await Guest.create(newGuest);
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

// function generateTableId(time){
//   return table_id;
// }

module.exports = router;