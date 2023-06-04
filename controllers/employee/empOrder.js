const mongoose = require("mongoose");
const Order = require("../../models/custOrderModel");
const eOrder = require("../../models/empOrderModel");

const order = {
  async getOrder(req, res){
    const order_id = req.params.order_id;

    try {
      // 撈所有菜單出來檢查是否全部都完成
      const data = await Order.find({order_id: order_id});
      const allFinished = data.every(item => item.finished === true);

      if (allFinished === true) {
        await eOrder.updateOne({ 
          _id: order_id, 
        },{
          $set: {
            finished: true
          }
        })
      }

      res.status(200).json({
        "success": true,
        "data": data,
      });
    }
    catch (error) {
      console.log(error);
      res.status(400).json({
        "message": error
      })
    }
  },
  async patchOrder(req, res) {
    const { product_id } = req.body;
    
    try {
      await Order.updateOne({ 
        _id: product_id, 
      },{
        $set: {
          finished: true
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