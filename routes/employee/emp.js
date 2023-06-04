const express = require("express");
const router = express.Router();
const LoginControllers = require("../../controllers/employee/empLogin");
const TableControllers = require("../../controllers/employee/empTable");
const OrderControllers = require("../../controllers/employee/empOrder");
const CheckControllers = require("../../controllers/employee/empCheck");

// register just for testing purposes
router.post("/register",      LoginControllers.register);
router.post("/login",         LoginControllers.login);
router.post("/logout",        LoginControllers.logout);

router.get("/table",           TableControllers.getTable);

// 2.4.2
router.get("/order/:order_id", OrderControllers.getOrder);
// router.get("/table/:table_id", TableControllers.getAllOrder);
router.patch("/order",        OrderControllers.patchOrder);

router.get("/check",           CheckControllers.getCheck);
router.patch("/check",         CheckControllers.patchCheck);

module.exports = router;
