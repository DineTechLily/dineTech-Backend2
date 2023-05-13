const express = require("express");
const router = express.Router();
const DiscountControllers = require("../../controllers/admin/discount");

// 搜尋所有折扣
router.get("/", DiscountControllers.getAllDiscount);

// 新增單一折扣
router.post("/", DiscountControllers.getDiscount);

//  編輯單一折扣
router.patch("/", DiscountControllers.editDiscount);

// 移除單一折扣
router.delete("/", DiscountControllers.deleteDiscount);

module.exports = router;
