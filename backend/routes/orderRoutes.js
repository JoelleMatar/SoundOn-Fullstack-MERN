const express = require("express");
const router = express.Router();

const {
  addOrderItems,
  getOrderById,
} = require("../controller/orderControllers");

router.get("/", addOrderItems);
router.get("/:id", getOrderById);

module.exports = router;
