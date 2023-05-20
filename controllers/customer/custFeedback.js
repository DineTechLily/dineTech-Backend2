const Feedback = require("../../models/custFeedbackModel");

const feedback = {
  async postFeedback(req, res) {
    const { quality, process, speed, flavor, price, sanitation, impress, feedback } = req.body;
    const newFeedback = { quality, process, speed, flavor, price, sanitation, impress, feedback };

    try {
      const data = await Feedback.create(newFeedback);
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
module.exports = feedback;
