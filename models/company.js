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

const companySchema = new mongoose.Schema({
    photo: {
        type: String,
        required: false,
        default: 'https://craftypixels.com/placeholder-image/200.png/018c8c/fff'
    },
    name: {
        type: String,
        required: true 
    },
    VATNumber: {
        type: String,
        required: true 
    },
    registrationNumber: {
        type: String,
        required: true 
    },
    billingAddress: {
        type: String,
        required: true 
    },
    shippingAddress: {
        type: String,
        required: false 
    },
    website: {
        type: String,
        required: false,
        lowercase: true
    },
    phoneNumber: {
        type: String,
        required: false 
    },
    emailAddress: {
        type: String,
        required: false,
        lowercase: true
    },
    contactPersonId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    bankDetails: {
        type: bankDetailsSchema,
        required: true
    },

    createdOn: {
        type: Date,
        required: false,
        default: () => Date.now()
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false,
    } ,
    updatedOn: {
        type: Date,
        required: false,
        default: () => Date.now()
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false,
    },
})


module.exports = mongoose.model("Company", companySchema, "companies");