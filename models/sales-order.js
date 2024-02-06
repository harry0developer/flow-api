const mongoose = require("mongoose");

const salesOrderSchema = new mongoose.Schema({
    salesOrderNo: {
        type: String,
        required: true
    },
    salesOrderDate: {
        type: Date,
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
    invoice: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Invoice",
        required: true,
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

module.exports =  mongoose.model("SalesOrder", salesOrderSchema, "sales_order");