const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  getProductByCategory
  // getProductsByCategories
} = require("../controller/productControllers");
const {
  addOrderItems,
  getOrderById,
} = require("../controller/orderControllers");
const {
  getAllCategories
} = require("../controller/categoriesControllers");

router.get("/", getAllProducts);
router.post("/byCategory", getProductByCategory);
router.get("/:id", getProductById);
// router.get("/category", getProductsByCategories);

router.post("/addOrder", addOrderItems);
router.get("/order/:id", getOrderById);

router.get("/category", getAllCategories);

module.exports = router;
