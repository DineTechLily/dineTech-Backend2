const Product = require("../../models/productModel");

const product = {
  async getAllProduct(req, res, next) {
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
  async getOneProduct(req, res, next) {
    const { category, name, cost, price, description, img, customization } =
      req.body;
    const newProduct = {
      category,
      name,
      cost,
      price,
      description,
      img,
      customization,
    };
    try {
      const data = await Product.create(newProduct);
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      // console.log(error);
      res.status(400).json({
        message: error,
      });
    }
  },
  async editProduct(req, res, next) {
    const {
      _id,
      category,
      name,
      cost,
      price,
      description,
      img,
      customization,
    } = req.body;
    const updateProduct = {
      category,
      name,
      cost,
      price,
      description,
      img,
      customization,
    };
    try {
      const data = await Product.findByIdAndUpdate(_id, updateProduct, {
        new: true,
      });
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async deleteProduct(req, res, next) {
    const { _id, isRemoved } = req.body;
    const removeProduct = { isRemoved };
    try {
      const data = await Product.findByIdAndUpdate(_id, removeProduct, {
        new: true,
      });
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = product;
