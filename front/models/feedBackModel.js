const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
  quality: {
    type: Number,
  },  
  process: {
    type: Number,
  },  
  speed: {
    type: Number,
  },  
  flavor: {
    type: Number,
  },  
  price: {
    type: Number,
  },  
  sanitation: {
    type: Number,
  },  
  impress: {
    type: Number,
  },  
  feedback: {
    type: String,
  }
});

const Feedback = mongoose.model("Feeback", feedbackSchema);

module.exports = Feedback;