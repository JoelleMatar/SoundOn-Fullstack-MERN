const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    }
})

const Counter = mongoose.model('counter', counterSchema);

module.exports = Counter;