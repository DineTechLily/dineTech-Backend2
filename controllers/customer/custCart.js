const Cart = require('../../models/custCartModel');
const Order = require('../../models/custOrderModel');
const Guest = require('../../models/custGuestModel');

const cart = {
  
  async getCart (req, res) {
    const order_id = req.params.order_id;

    try {
      const data = await Cart.find({order_id: order_id});
      
      res.status(200).json({
        "success": true,
        "message": "send data success",
        "data": data
      });
    }
    catch (error) {
      res.status(400).json({
        "message": error
      })
    }
  },
  async postCart (req, res) {
    const { order_id, category, name, price, description, img, number, cust_name1, cust_description1, cust_price1, cust_name2, cust_description2, cust_price2, cust_name3, cust_description3, cust_price3 }= req.body;
    const newCart = { order_id, category, name, price, description, img, number, cust_name1, cust_description1, cust_price1, cust_name2, cust_description2, cust_price2, cust_name3, cust_description3, cust_price3 };
    try {
      const data = await Cart.create(newCart);

      res.status(200).json({
        "success": true,
        "message": "send data success",
      });
    }
    catch (error) {
      res.status(400).json({
        "message": error
      })
    }
  },
  async patchCart (req, res) {
    // cust_name先放著對應
    const { edit_id, number, cust_name1, cust_description1, cust_price1, cust_name2, cust_description2, cust_price2, cust_name3, cust_description3, cust_price3 } = req.body;
    // 只會編輯客製化，客製化name不會變動，只有內容跟錢會變動
    try {
      const data = await Cart.findOneAndUpdate(
        {
          _id: edit_id
        },{
          $set: {
            number: number,
            cust_description1: cust_description1, 
            cust_price1: cust_price1, 
            cust_description2: cust_description2, 
            cust_price2: cust_price2,
            cust_description3: cust_description3, 
            cust_price3: cust_price3
          }
        },{
          new: true
        }
      )
      res.status(200).json({
        "success": true,
        "message": "send data success",
        // "data": data
      });
    }
    catch (error) {
      res.status(400).json({
        "message": error
      })
    }
  },
  async deleteCart (req, res) {
    const { edit_id } = req.body;

    try {
      const data = await Cart.deleteOne({
        _id: edit_id
      });

      res.status(200).json({
        "success": true,
        "message": "send data success",
      });
    }
    catch (error) {
      res.status(400).json({
        "message": error
      })
    }
  },
  async getCartDetails (req, res) {
    const table_id = req.params.table_id;

    try {
      const all_order = await Guest.find({table_id: table_id});
      const order_list = all_order[0].order_id;
      const data = [];

      for (let i = 0; i < order_list.length; i++) {
        let order = await Order.find({order_id: order_list[i]})
        data.push(order)
      }

      res.status(200).json({
        "success": true,
        "message": "all order",
        "data": data
      });
    }
    catch (error) {
      res.status(400).json({
        "message": error
      })
    }
  }
}

module.exports = cart;