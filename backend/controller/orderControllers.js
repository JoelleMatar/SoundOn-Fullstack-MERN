const asyncHandler = require('express-async-handler');
const Order = require('../models/Cart');

// @desc    Create new order
// @route   POST /apis/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
    const order = new Order({
      orderItems,
      totalPrice,
    })
    
    order.save();
  }
})

// @desc    Get order by ID
// @route   GET /apis/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  console.log("ASDFASD")
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found')
  }
})



module.exports = {
  addOrderItems,
  getOrderById,
};