const express = require('express');
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
} = require ('../../controller/orderControllers');
const { protect } = require ('../../middleware/authMiddleware');

router.route('/').post(addOrderItems, protect);
router.route('/myorders').get(protect);
router.route('/:id').get(protect, getOrderById);

module.exports = router;
