const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    email: { type: String },
    address: { type: String }
})

module.exports = mongoose.model('User', userSchema);