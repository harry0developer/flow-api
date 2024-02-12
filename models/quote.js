const mongoose = require("mongoose");


const quoteSchema = new mongoose.Schema({
    quoteNo: {
        type: String,
        required: true,
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
        type: [
            {
                id: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true  
                }, 
                photo: {
                    type: String,
                    required: false,
                    default: () => "https://craftypixels.com/placeholder-image/300.png/018c8c/fff"
                },
                stockCode: {
                    type: String,
                    required: true  
                }, 
                description: {
                    type: String,
                    required: true   
                },
                quantity: {
                    type: Number,
                    required: true   
                },
                costPrice: {
                    type: Number,
                    required: true   
                },
                sellingPrice: {
                    type: Number,
                    required: true   
                },
                discountPrice: {
                    type: Number,
                    required: false,
                    default: 0 
                },
                discountPercentage: {
                    type: Number,
                    required: false,
                    default: 0   
                },
                VAT: {
                    type: Number,
                    required: false,
                    default: 0
                },
            }
        ]

    },
    hasSalesOrder: {
        type: Boolean,
        required: true
    },
    salesOrder: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false,
        ref: "SalesOrder"
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

module.exports =  mongoose.model("Quote", quoteSchema, "quotes");