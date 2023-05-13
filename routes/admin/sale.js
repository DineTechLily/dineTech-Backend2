const express = require("express");
const router = express.Router();
const SaleControllers = require("../../controllers/admin/sale");

// 搜尋所有項目
router.get("/item", SaleControllers.getAllItem);

// 新增單一項目
router.post("/item", SaleControllers.getOneItem);

// 編輯單一項目
router.patch("/item", SaleControllers.editOneItem);

// 移除單一項目
router.delete("/item", SaleControllers.deleteOneItem);

// 搜尋所有套餐
router.get("/meal", SaleControllers.getAllMeal);

// 新增單一套餐
router.post("/meal", SaleControllers.addOneMeal);

// 編輯單一套餐
router.patch("/meal", SaleControllers.editOneMeal);

// 移除單一套餐
router.delete("/meal", SaleControllers.deleteOneMeal);

module.exports = router;
