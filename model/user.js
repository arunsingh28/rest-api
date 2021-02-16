const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: { type : String, required: true },
    roll: { type : Number, required: true },
    clas : { type : String, required: true },
    dob : { type : String, required: true },
    group : { type : String, required: true },
    mark : { type: String, required: true }
})

const userSchema = mongoose.model('User',User)

module.exports = userSchema