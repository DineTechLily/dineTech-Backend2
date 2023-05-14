const Guest = require('../../models/custGuestModel');

const guest = {
  async postGuest (req, res) {
    const { time, table, people, table_id } = req.body;
    const newGuest = { time, table, people, table_id };

    try {
      const data = await Guest.create(newGuest);
      const table_id = data._id.toString()

      res.status(200).json({
        "success": true,
        "message": "send data success",
        "data": {
          "table_id": table_id,
        }
      });
    }
    catch (error) {
      res.status(400).json({
        "message": error
      })
    }
  }
}

module.exports = guest;