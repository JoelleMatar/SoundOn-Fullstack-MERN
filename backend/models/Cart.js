const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User',
    // },
    orderItems: [
        {
            // countInStock: {type: Number, required: false},
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            // image: { type: String, required: true },
            price: { type: Number, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
        },
    ],
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    }
})

const Order = mongoose.model('orders', cartSchema);

module.exports = Order;