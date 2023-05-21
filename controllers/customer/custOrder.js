const mongoose = require("mongoose");
const Cart = require("../../models/custCartModel");
const Order = require("../../models/custOrderModel");
const Guest = require("../../models/custGuestModel");
// 這裡要做一個如果送重複訂單的error function
// 但應該只會發生在develop

// 補扣庫存 應該for做
const order = {
  async postOrder(req, res) {
    const {order_id, table_id} = req.body;
    
    try {
      const cart = await Cart.find({order_id: order_id});
      await Order.insertMany(cart);

      // Add a new order_id to guest
      const newOrderId = (new mongoose.Types.ObjectId()).toString();
      await Guest.updateOne({ 
        table_id: table_id, 
      },{
        $push: {
          order_id: newOrderId,
        }
      })

      res.status(200).json({
        success: true,
        message: "send data success",
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  },
};
module.exports = order;
