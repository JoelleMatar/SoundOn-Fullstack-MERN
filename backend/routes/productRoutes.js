const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");
const {
  addOrderItems,
  getOrderById,
} = require("../controller/orderControllers");

router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.post("/addOrder", addOrderItems);
router.get("/order/:id", getOrderById);

module.exports = router;
