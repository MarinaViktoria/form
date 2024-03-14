const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema ({
    name: String,
    lastname: String,
    email: String,
    address: String,
    city: String,
    country: String,
    zip: Number,
    message: String 
})

module.exports = mongoose.model("MyNewMessages", messageSchema)