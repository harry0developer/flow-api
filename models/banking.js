const mongoose = require('mongoose');

const bankDetailsSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        required: false 
    },
    branchCode: {
        type: String,
        required: false 
    },
    bankName: {
        type: String,
        required: false 
    }
});

module.exports = mongoose.model("Banking", customerSchema, "banking");