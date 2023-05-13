const express = require("express");
const router = express.Router();
const FeedbackControllers = require("../../controllers/customer/custFeedback");

router.post("/", FeedbackControllers.custFeedback);

module.exports = router;
