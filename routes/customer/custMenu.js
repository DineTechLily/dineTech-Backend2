const express = require("express");
const router = express.Router();
const MenuControllers = require("../../controllers/customer/custMenu");

router.get("/", MenuControllers.getAllMenu);

module.exports = router;
