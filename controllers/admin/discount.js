const Discount = require("../../models/discountModel");

const discount = {
  async getAllDiscount(req, res, next) {
    try {
      const data = await Discount.find();
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async getDiscount(req, res, next) {
    const { name, category, stock, expiration, symbol, discountValue } =
      req.body;
    const newDiscount = {
      name,
      category,
      stock,
      expiration,
      symbol,
      discountValue,
    };
    try {
      const data = await Discount.create(newDiscount);
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async editDiscount(req, res, next) {
    const { _id, name, category, stock, expiration, symbol, discountValue } =
      req.body;
    const updateDiscount = {
      name,
      category,
      stock,
      expiration,
      symbol,
      discountValue,
    };
    try {
      const data = await Discount.findByIdAndUpdate(_id, updateDiscount, {
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
  async deleteDiscount(req, res, next) {
    const { _id, isRemoved } = req.body;
    const removeDiscount = { isRemoved };
    try {
      const data = await Discount.findByIdAndUpdate(_id, removeDiscount, {
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

module.exports = discount;
