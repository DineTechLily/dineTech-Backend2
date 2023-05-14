const Product = require("../../models/productModel");

const menu = {
  async getMenu(_, res) {
    try {
      const data = await Product.find();
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = menu;
