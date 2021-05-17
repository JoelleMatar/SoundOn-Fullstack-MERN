const mongoose = require("mongoose");

const userSessionSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: ''
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

const UserSession = mongoose.model('usersSession', userSessionSchema);

module.exports = UserSession;