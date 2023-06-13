const express = require("express");
const router = express.Router();
const LoginControllers = require("../../controllers/employee/empLogin");
const OrderControllers = require("../../controllers/employee/empOrder");
const CheckControllers = require("../../controllers/employee/empCheck");

// register just for testing purposes
router.post("/register",       LoginControllers.register);
router.post("/login",          LoginControllers.login);
router.post("/logout",         LoginControllers.logout);

router.get("/order",           OrderControllers.getOrderTicket);
router.get("/order/done",      OrderControllers.getOrderDoneTicket);
router.get("/order/:order_id", OrderControllers.getOrder);
router.patch("/order",         OrderControllers.patchOrder);
router.patch("/order/abandon", OrderControllers.patchAbandon);

router.patch("/check",         CheckControllers.patchCheck);

module.exports = router;