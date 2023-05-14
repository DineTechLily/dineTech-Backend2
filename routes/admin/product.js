const express = require("express");
const router = express.Router();
const ProductControllers = require("../../controllers/admin/product");

// 搜尋所有商品
router.get("/", ProductControllers.getAllProduct);

// 新增單一商品
router.post("/", ProductControllers.getOneProduct);

// 編輯單一商品
router.patch("/", ProductControllers.editProduct);

// 移除單一商品
router.delete("/", ProductControllers.deleteProduct);

module.exports = router;
