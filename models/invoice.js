const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
    invoiceNo: {
        type: String,
        required: true
    },
    invoiceDate: {
        type: Date,
        requried: true
    },
    invoiceDueDate: {
        type: Date,
        requried: true
    },
    invoiceTerm: {
        type: String,
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
    
    quote: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Quote",
        required: true
    },
    hasSalesOrder: {
        type: Boolean,
        required: true
    },
    salesOrder: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "SalesOrder",
        required: false
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

module.exports =  mongoose.model("Invoice", invoiceSchema, "invoices");