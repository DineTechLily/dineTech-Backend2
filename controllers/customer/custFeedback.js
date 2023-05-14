const Feedback = require("../../models/feedBackModel");

const feedback = {
  async custFeedback(req, res, next) {
    const {
      quality,
      process,
      speed,
      flavor,
      price,
      sanitation,
      impress,
      feedback,
    } = req.body;
    const newFeedback = {
      quality,
      process,
      speed,
      flavor,
      price,
      sanitation,
      impress,
      feedback,
    };
    
    try {
      const data = await Feedback.create(newFeedback);
      res.status(200).json({
        success: true,
        message: "send data success",
        data: data,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  },
};
module.exports = feedback;
