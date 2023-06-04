const express = require("express");
const router = express.Router();

const MenuControllers = require("../../controllers/customer/custMenu");
const GuestControllers = require("../../controllers/customer/custGuest");
const CartControllers = require("../../controllers/customer/custCart");
const OrderControllers = require("../../controllers/customer/custOrder");
const FeedbackControllers = require("../../controllers/customer/custFeedback");

router.get("/menu",                   MenuControllers.getMenu);
router.get("/menu/:id",               MenuControllers.getMenuId);

router.post("/guest",                 GuestControllers.postGuest);

router.get("/cart/:order_id",         CartControllers.getCart);
router.post("/cart",                  CartControllers.postCart);
router.patch("/cart",                 CartControllers.patchCart);
router.delete("/cart",                CartControllers.deleteCart);
router.get("/cart/details/:table_id", CartControllers.getCartDetails);

router.post("/order",                 OrderControllers.postOrder);    

router.post("/feedback",              FeedbackControllers.postFeedback);

module.exports = router;