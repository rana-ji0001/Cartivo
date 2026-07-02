const mongoose = require('mongoose');


const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required to be in blacklisted"]
    }
}, { timestamps: true });

const blacklistedModel = mongoose.model("token",blacklistSchema);


module.exports = blacklistedModel