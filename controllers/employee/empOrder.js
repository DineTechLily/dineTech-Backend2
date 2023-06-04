const mongoose = require("mongoose");
const Order = require("../../models/custOrderModel");
const Guest = require("../../models/custGuestModel");

const order = {
  async getOrder(req, res){
    const order_id = req.params.order_id;

    try {
      const data = await Order.find({order_id: order_id});

      const allFinished = data.every(item => item.finished === true);
      console.log(allFinished);

      if (allFinished === true) {
        await Guest.updateOne({ 
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