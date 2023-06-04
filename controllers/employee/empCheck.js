const Guest = require("../../models/custGuestModel");

const check = {
  async getCheck(req, res) {

  },

  async patchCheck(req, res) {
    try {
      const { table_id } = req.body;
      console.log(table_id);
      const data = await Guest.updateOne({
        table_id: table_id,
      },{
        $set:{
          "payment": true
        }
      },{
        new: true
      })
      console.log(data);
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
