const mongoose = require("mongoose");

const purchaseOrderSchema = new mongoose.Schema({
    purchaseOrderNo: {
        type: String,
        required: true
    },
    purchaseOrderDate: {
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
    salesOrder:  {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "SalesOrder",
        required: true
    },
    Invoice: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Invoice",
        required: false,
    },
    hasInvoice: {
        type: Boolean,
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

module.exports =  mongoose.model("PurchaseOrder", purchaseOrderSchema, "purchase_order");