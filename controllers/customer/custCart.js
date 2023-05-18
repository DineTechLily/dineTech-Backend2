const Cart = require('../../models/custCartModel');

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
    const { order_id, category, name, price, description, img, cust_name1, cust_description1, cust_price1, cust_name2, cust_description2, cust_price2 }= req.body;
    const newCart = { order_id, category, name, price, description, img, cust_name1, cust_description1, cust_price1, cust_name2, cust_description2, cust_price2 };
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
    const { edit_id, cust_name1, cust_description1, cust_price1, cust_name2, cust_description2, cust_price2 } = req.body;
    // 只會編輯客製化，客製化name不會變動，只有內容跟錢會變動
    try {
      const data = await Cart.findOneAndUpdate(
        {
          _id: edit_id
        },{
          $set: {
            cust_description1: cust_description1, 
            cust_price1: cust_price1, 
            cust_description2: cust_description2, 
            cust_price2: cust_price2
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
}

module.exports = cart;