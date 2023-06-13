const mongoose = require("mongoose");
const Cart = require("../../models/custCartModel");
const Order = require("../../models/custOrderModel");
const Guest = require("../../models/custGuestModel");
const eOrder = require("../../models/empOrderModel");
const Item = require("../../models/itemModel")

const order = {
  async postOrder(req, res) {
    const {order_id, table_id} = req.body;
    
    try {
      const cart = await Cart.find({order_id: order_id}).lean();
      const updatedCart = cart.map(item => ({ ...item, finished: "false" }));

      const times = new Date();
      times.setUTCHours(times.getUTCHours() + 8);
      const postTime = times.toISOString();

      // Move the cart data to the order schema
      await Order.insertMany(updatedCart);

      // Move the guest data to the emporder schema
      const guest = await Guest.find({ order_id: order_id}).lean();
      delete guest[0].order_id;
      delete guest[0].order_time;
      delete guest[0]._id;
      guest[0].order_id = order_id;
      guest[0].order_time = postTime;
      guest[0].finished = false;
      await eOrder.insertMany(guest);

      // Add a new order_id to guest_database
      const newOrderId = (new mongoose.Types.ObjectId()).toString();
      await Guest.updateOne({
        table_id: table_id,
      },{
        $push: {
          order_id: newOrderId,
          order_time: postTime
        }
      })
      const data = {
        new_order_id: newOrderId,
      }

      // 扣庫存
      for (i=0; i<cart.length; i++) {
        await Item.updateOne({
          name: cart[i].name,
        },{
          $inc: {
            stock: -1 
          }
        })
      }

      res.status(200).json({
        success: true,
        message: "send data success",
        data: "data",
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  },
};
module.exports = order;
