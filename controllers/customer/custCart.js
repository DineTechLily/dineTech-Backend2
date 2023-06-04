const Cart = require('../../models/custCartModel');
const Order = require('../../models/custOrderModel');
const Guest = require('../../models/custGuestModel');
const Product = require("../../models/productModel");

const cart = {
  
  async getCart (req, res) {
    const order_id = req.params.order_id;

    try {
      const data = await Cart.find({order_id: order_id}).lean();
      
      const all = await Promise.all(data.map(async (item) => {
        const id = (await Product.find({name: item.name}))[0]._id.toString();

        const cust = [];
        for (let i = 1; i <= 3; i++) {
          const custName = item[`cust_name${i}`];
          const custPrice = item[`cust_price${i}`];
          if (custName) {
            cust.push({
              name: custName,
              price: custPrice
            });
          }
          delete item[`cust_name${i}`];
          delete item[`cust_price${i}`];
        }
        item.product_id = id;
        item.cust = cust;
        delete item.__v;
        return item;
      }));

      res.status(200).json({
        "success": true,
        "data": all,
      });
    }
    catch (error) {
      console.log(error);
      res.status(400).json({
        "message": error
      })
    }
  },
  async postCart (req, res) {
    const data = req.body;
    
    const newCart = {
      order_id: data.order_id,
      category: data.category,
      name: data.name,
      price: data.price,
      description: data.description,
      img: data.img, 
      number: data.number,
      total_price: data.total_price,
    };

    for (let i = 0; i < data.cust.length; i++) {
      const cust = data.cust[i];
      newCart[`cust_name${i + 1}`] = cust.name;
      newCart[`cust_price${i + 1}`] = cust.price;
    }

    try {
      const data = await Cart.create(newCart);
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
  async patchCart (req, res) {
    try {
      const data = req.body;
      const edit = {
        edit_id: data.edit_id,
        number: data.number,
        total_price: data.total_price,
        cust_name1: null,
        cust_price1: null,
        cust_name2: null,
        cust_price2: null,
        cust_name3: null,
        cust_price3: null,
      }
      
      for (let i = 0; i < data.cust.length; i++) {
        const cust = data.cust[i];
        edit[`cust_name${i + 1}`] = cust.name;
        edit[`cust_price${i + 1}`] = cust.price;
      }

      const edit_data = await Cart.findOneAndUpdate({
          _id: data.edit_id,
        },
          edit
        ,{
          new: true
        }
      )
      res.status(200).json({
        "success": true,
        "message": "send data success",
        "data": edit_data
      });
    }
    catch (error) {
      console.log(error)
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
        const order = await Order.find({order_id: order_list[i]}).lean();
        const all = await order.map((item) => {
          const cust = [];
          for (let i = 1; i <= 3; i++) {
            const custName = item[`cust_name${i}`];
            const custPrice = item[`cust_price${i}`];
            if (custName) {
              cust.push({
                name: custName,
                price: custPrice
              });
            }
            delete item[`cust_name${i}`];
            delete item[`cust_price${i}`];
          }
          item.cust = cust;
          delete item.__v;
          return item;
        });
        data.push(all)
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