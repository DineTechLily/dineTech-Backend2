const Item = require("../../models/itemModel");
const Meal = require("../../models/mealModel");

const sale = {
  async getAllItem(req, res, next) {
    try {
      const data = await Item.find();
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async getOneItem(req, res, next) {
    const { product, name, stock } = req.body;
    const newItem = { product, name, stock };
    try {
      const data = await Item.create(newItem);
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async editOneItem(req, res, next) {
    const { _id, name, stock } = req.body;
    const updateItem = { name, stock };
    try {
      const data = await Item.findByIdAndUpdate(_id, updateItem, { new: true });
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async deleteOneItem(req, res, next) {
    const { _id, isRemoved } = req.body;
    const removeItem = { isRemoved };
    try {
      const data = await Item.findByIdAndUpdate(_id, removeItem, { new: true });
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async getAllMeal(req, res, next) {
    try {
      const data = await Meal.find();
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async addOneMeal(req, res, next) {
    const { name, category, main, hasDessert, dessert, hasDrink, drink } =
      req.body;
    const newMeal = {
      name,
      category,
      main,
      hasDessert,
      dessert,
      hasDrink,
      drink,
    };
    try {
      const data = await Meal.create(newMeal);
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async editOneMeal(req, res, next) {
    const { _id, name, category, main, hasDessert, dessert, hasDrink, drink } =
      req.body;
    const updateMeal = {
      name,
      category,
      main,
      hasDessert,
      dessert,
      hasDrink,
      drink,
    };
    try {
      const data = await Meal.findByIdAndUpdate(_id, updateMeal, { new: true });
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async deleteOneMeal(req, res, next) {
    const { _id, isRemoved } = req.body;
    const removeMeal = { isRemoved };
    try {
      const data = await Meal.findByIdAndUpdate(_id, removeMeal, { new: true });
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = sale;
