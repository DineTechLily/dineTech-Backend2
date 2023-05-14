const express = require("express");
const router = express.Router();
const adminLoginControllers = require("../../controllers/admin/login");

// register just for testing purposes
router.post("/register", adminLoginControllers.register);

router.post("/login", adminLoginControllers.login);

router.post("/logout", adminLoginControllers.logout);

module.exports = router;
