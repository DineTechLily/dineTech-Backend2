const express = require("express");
const router = express.Router();
const CustomizationControllers = require("../../controllers/admin/customization");

// 搜尋所有客製化選項
router.get("/", CustomizationControllers.getAllCustomization);

// 新增單一客製化選項
router.post("/", CustomizationControllers.getCustomization);

// 編輯單一客製化選項
router.patch("/", CustomizationControllers.editCustomization);

// 移除單一客製化選項
router.delete("/", CustomizationControllers.deleteCustomization);

module.exports = router;
