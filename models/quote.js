const mongoose = require("mongoose");


const quoteSchema = new mongoose.Schema({
    quoteNo: {
        type: String,
        required: true
    },
    quoteDate: {
        type: Date,
        requried: true
    },
    quoteStartDate: {
        type: Date,
        requried: true
    },
    quoteDueDate: {
        type: Date,
        requried: true
    },
    quoteTerm: {
        type: Number,
        requried: true
    },
    customer:  {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "Customer"
    },
    company:  {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "Company"
    },
    items: {
        type: Array(mongoose.SchemaTypes.ObjectId),
        requried: true,
        ref: "Inventory"
    },
    totalPriceExclusive: {
        type: Number,
        required: true
    },
    totalVAT: {
        type: Number,
        required: true
    },
    totalPriceDiscount: {
        type: Number,
        required: true
    },
    totalPriceInclusive: {
        type: Number,
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
}, {
    strictPopulate: false
})

module.exports =  mongoose.model("Qoute", quoteSchema, "quotes");