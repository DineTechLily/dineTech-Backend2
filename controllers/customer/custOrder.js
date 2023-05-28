const mongoose = require("mongoose");
const Cart = require("../../models/custCartModel");
const Order = require("../../models/custOrderModel");
const Guest = require("../../models/custGuestModel");

// 扣庫存
// const Item = require("../../models/itemModel")

// 這裡要做一個如果送重複訂單的error function
// 但應該只會發生在develop

const order = {
  async postOrder(req, res) {
    const {order_id, table_id} = req.body;
    
    try {
      const cart = await Cart.find({order_id: order_id});
      
      // Move the cart data to the order schema
      await Order.insertMany(cart);

      // Add a new order_id to guest_database
      const newOrderId = (new mongoose.Types.ObjectId()).toString();
      await Guest.updateOne({ 
        table_id: table_id, 
      },{
        $push: {
          order_id: newOrderId,
        }
      })
      const data = {
        new_order_id: newOrderId,
      }

      // 扣庫存

      res.status(200).json({
        success: true,
        message: "send data success",
        data: data,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  },
};
module.exports = order;
