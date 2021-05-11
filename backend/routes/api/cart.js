const express = require("express");
const { addItemsToCart } = require("../../controller/cartControllers");
const router = express.Router();

router.post("/shoppingCart/purchaseItems", addItemsToCart);

module.exports = router;