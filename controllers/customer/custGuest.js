const Guest = require('../../models/custGuestModel');

const guest = {
  async postGuest (req, res) {
    const { table, people } = req.body;
    const times = new Date;
    const time = times.toISOString();
    const table_id = times.getTime();
    let order_id, order_time;

    const newGuest = { time, table, people, order_id, order_time, table_id };
    try {

      const data = await Guest.create(newGuest);
      const order_id = data._id.toString();
      
      await Guest.updateOne({
        table_id: table_id
      },{
        $set: {
          order_id: order_id
        }
      })
      res.status(200).json({
        "success": true,
        "message": "send data success",
        "data": {
          "order_id": order_id,
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