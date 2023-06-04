const eOrder = require("../../models/empOrderModel");

const check = {
  // async getCheck(_, res) {
  //   try {
  //     await eOrder.find()

  //     res.status(200).json({
  //       success: true,
  //       data: data
  //     });
  //   }catch (error) {
  //     res.status(400).json({
  //       message: error,
  //     });
  //   }
  // },

  async patchCheck(req, res) {
    try {
      const { table_id } = req.body;

      const data = await eOrder.updateOne({
        table_id: table_id,
      },{
        $set:{
          "payment": true
        }
      },{
        new: true
      })

      res.status(200).json({
        success: true,
        message: "send data success"
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  },
};

module.exports = check;
