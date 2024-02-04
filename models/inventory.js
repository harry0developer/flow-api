const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
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
    createdOn: {
        type: Date,
        required: false,
        default: () => Date.now()
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false
    } ,
    updatedOn: {
        type: Date,
        required: false,
        default: () => Date.now()
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false
    }
});

module.exports =  mongoose.model("Inventory", inventorySchema, "inventory");