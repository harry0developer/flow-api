const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
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
    email: {
        type: String,
        required: false,
        lowercase: true
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
    },
    createdOn: {
        type: Date,
        required: false,
        default: () => Date.now()
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false,
        ref: "User"
    } ,
    updatedOn: {
        type: Date,
        required: false,
        default: () => Date.now()
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false,
        ref: "User"
    },
});
 
module.exports = mongoose.model("User", userSchema, "users");