const express = require("express");
const router = express.Router();
const empLoginControllers = require("../../controllers/employee/empLogin");

// register just for testing purposes
router.post("/register", empLoginControllers.register);

router.post("/login", empLoginControllers.login);

router.post("/logout", empLoginControllers.logout);

module.exports = router;
