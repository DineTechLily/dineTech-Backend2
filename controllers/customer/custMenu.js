const Menu = require("../../models/custMenuModel");

const menu = {
  async getAllMenu(_, res) {
    try {
      const data = await Menu.find();

      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = menu;
