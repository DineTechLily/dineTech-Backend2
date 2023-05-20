const Order = require("../../models/custOrderModel");
const Cart = require("../../models/custCartModel");
// 這裡要做一個如果送重複訂單的error function
// 但應該只會發生在develop

// 補扣庫存 應該for做
const order = {
  async postOrder(req, res) {
    const order_id = req.body;
    
    try {
      const cart = await Cart.find({order_id :order_id})
      await Order.insertMany(cart);

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
