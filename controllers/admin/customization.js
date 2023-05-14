const Customization = require("../../models/customizationModel");

const customization = {
  async getAllCustomization(req, res, next) {
    try {
      const data = await Customization.find();
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async getCustomization(req, res, next) {
    const { category, name, cost, price, description, img } = req.body;
    const newCustomization = { category, name, cost, price, description, img };
    try {
      const data = await Customization.create(newCustomization);
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async editCustomization(req, res, next) {
    const { _id, category, name, cost, price, description, img } = req.body;
    const updateCustomization = {
      category,
      name,
      cost,
      price,
      description,
      img,
    };
    try {
      const data = await Customization.findByIdAndUpdate(
        _id,
        updateCustomization,
        { new: true }
      );
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async deleteCustomization(req, res, next) {
    const { _id, isRemoved } = req.body;
    const removeCustomization = { isRemoved };
    try {
      const data = await Customization.findByIdAndUpdate(
        _id,
        removeCustomization,
        { new: true }
      );
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = customization;
