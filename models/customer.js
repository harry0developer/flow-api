const mongoose = require('mongoose');

const contactPersonSchema = new mongoose.Schema({
    title:{
        type: String,
        required: false
    },
    gender:{
        type: String,
        required: false
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    emailAddress:{
        type: String,
        required: false,
        lowercase: true
    },
    phoneNumber:{
        type: String,
        required: false
    },
});

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

const customerSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: false,
        default: 'https://craftypixels.com/placeholder-image/200.png/018c8c/fff'
    },
    companyName: {
        type: String,
        required: true 
    },
    VATNumber: {
        type: String,
        required: false 
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
    contactPerson: contactPersonSchema,
    bankDetails: bankDetailsSchema,
    
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
    }
})


module.exports = mongoose.model("Customer", customerSchema, "customers");