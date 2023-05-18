const Guest = require('../../models/custGuestModel');
// order id is sort by table id
const guest = {
  async postGuest (req, res) {
    const { time, table, people, order_id } = req.body;
    const newGuest = { time, table, people, order_id };

    try {
      const data = await Guest.create(newGuest);
      const order_id = data._id.toString()

      res.status(200).json({
        "success": true,
        "message": "send data success",
        "data": {
          "order_id": order_id,
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