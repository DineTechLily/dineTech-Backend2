const Order = require("../../models/custOrderModel");
const eOrder = require("../../models/empOrderModel");
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3009 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
    console.log("--------------------------------")
  });

  ws.on('close', () => {
  });
});

const order = {
  async getOrderTicket(_, res) {
    try {
      const data = await eOrder.find({finished: false});

      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  },
  async getOrderDoneTicket(_, res) {
    try {
      const data = await eOrder.find({ finished: true});

      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  },
  async getOrder(req, res){
    const order_id = req.params.order_id;

    try {
      const data = await Order.find({order_id: order_id});

      res.status(200).json({
        "success": true,
        "data": data,
      });
    }
    catch (error) {
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
          finished: "true"
        }
      })
      
      // 撈所有菜單出來檢查是否全部都完成
      const result = await Order.findOne({ _id: product_id }).select('order_id');
      const data = await Order.find({order_id: result.order_id});
      const allFinished = data.every(item => item.finished !== "false");

      if (allFinished === true) {
        await eOrder.findOneAndUpdate({ 
          order_id: result.order_id, 
        },{
          $set: {
            finished: true
          }
        },{
          new: true
        })
      }

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
  async patchAbandon(req, res) {
    const { product_id } = req.body;
    
    try {
      await Order.updateOne({ 
        _id: product_id, 
      },{
        $set: {
          finished: "abandoned",
        }
      })

      // 撈所有菜單出來檢查是否全部都完成
      const result = await Order.findOne({ _id: product_id }).select('order_id');
      const data = await Order.find({order_id: result.order_id});
      const allFinished = data.every(item => item.finished !== "false");

      if (allFinished === true) {
        await eOrder.findOneAndUpdate({ 
          order_id: result.order_id, 
        },{
          $set: {
            finished: true
          }
        },{
          new: true
        })
      }
      
      res.status(200).json({
        success: true,
        message: "send data success",
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  }
};
module.exports = order;