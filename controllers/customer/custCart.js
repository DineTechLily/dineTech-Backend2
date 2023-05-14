const Cart = require('../../models/custCartModel');

const cart = {
  
  async getCart (_, res) {
    // const { time, table, people, table_id } = req.body;
    // const newGuest = { time, table, people, table_id };

    try {
      // const data = await Guest.create(newGuest);
      // const table_id = data._id.toString()

      res.status(200).json({
        "success": true,
        "message": "send data success",
        "data": {
        }
      });
    }
    catch (error) {
      res.status(400).json({
        "message": error
      })
    }
  },
  async postCart (req, res) {
    // const { time, table, people, table_id } = req.body;
    // const newGuest = { time, table, people, table_id };

    try {
      // const data = await Guest.create(newGuest);
      // const table_id = data._id.toString()

      res.status(200).json({
        "success": true,
        "message": "send data success",
        "data": {
        }
      });
    }
    catch (error) {
      res.status(400).json({
        "message": error
      })
    }
  },
  async patchCart (req, res) {
    // const { time, table, people, table_id } = req.body;
    // const newGuest = { time, table, people, table_id };

    try {
      // const data = await Guest.create(newGuest);
      // const table_id = data._id.toString()

      res.status(200).json({
        "success": true,
        "message": "send data success",
        "data": {
        }
      });
    }
    catch (error) {
      res.status(400).json({
        "message": error
      })
    }
  },
  async deleteCart (req, res) {
    // const { time, table, people, table_id } = req.body;
    // const newGuest = { time, table, people, table_id };

    try {
      // const data = await Guest.create(newGuest);
      // const table_id = data._id.toString()

      res.status(200).json({
        "success": true,
        "message": "send data success",
        "data": {
        }
      });
    }
    catch (error) {
      res.status(400).json({
        "message": error
      })
    }
  },
}

module.exports = cart;