const mongoose = require("mongoose");

let Order = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: String
    },
    status: {
        type: String
    },
    userId: {
        type: String
    }

});

module.export  = mongoose.model('Order', Order)