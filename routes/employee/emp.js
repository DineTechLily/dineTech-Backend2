const express = require("express");
const router = express.Router();
const LoginControllers = require("../../controllers/employee/empLogin");
const TableControllers = require("../../controllers/employee/empTable");
// const DoneControllers = require("../../controllers/employee/empDone");
// const OrderControllers = require("../../controllers/employee/empOrder");
const CheckControllers = require("../../controllers/employee/empCheck");

// register just for testing purposes
router.post("/register",      LoginControllers.register);
router.post("/login",         LoginControllers.login);
router.post("/logout",        LoginControllers.logout);

router.get("/table",           TableControllers.getTable);
router.get("/table/:table_id", TableControllers.getOrder);

// router.get("/done/:table_id", DoneControllers.);

// router.patch("/order", OrderControllers.);
router.patch("/check",         CheckControllers.getCheck);
router.patch("/check",         CheckControllers.patchCheck);

module.exports = router;
