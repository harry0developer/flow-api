const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    idNumber: {
        type: String,
        required: false
    },
    
    phone: {
        type: String,
        required: false
    },
    profilePhoto: {
        type: String,
        required: false,
        default: 'https://craftypixels.com/placeholder-image/200.png/018c8c/fff'
    },
    role: {
        type: String,
        required: false,
        default: 'Operator'
    },
    physicalAddress: {
        type: String,
        required: false
    }
});
 
module.exports = mongoose.model("User", userSchema, "users");