const express = require("express");
const router = express.Router();
const MenuControllers = require("../../controllers/customer/custMenu");
const GuestControllers = require("../../controllers/customer/custGuest");
const FeedbackControllers = require("../../controllers/customer/custFeedback");

router.get("/menu",       MenuControllers.getAllMenu);

router.post("/guest",      GuestControllers.postGuest);

router.post("/feedback",  FeedbackControllers.postFeedback);


module.exports = router;