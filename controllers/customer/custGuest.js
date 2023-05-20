const Guest = require('../../models/custGuestModel');
// order id is sort by table id
// 有找到就新增，沒有就創建一個新的guest
const guest = {
  async postGuest (req, res) {
    const { table, people } = req.body;
    const times = new Date;
    const time = times.toISOString();
    const table_id = times.getTime();
    let order_id;

    // 會有兩種情況
    // 加點單，已經有來過，檢查我存下來timestamp的table_id，把order_id存進去
    // 第一次點單，檢查不到，所以會創建一個新的table_id

    const newGuest = { time, table, people, order_id, table_id };
    try {
      // const doc = await Guest.findOne({table_id: })

      const data = await Guest.create(newGuest);
      console.log(data)
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