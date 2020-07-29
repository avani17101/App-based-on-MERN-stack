const mongoose = require("mongoose");

let Review = mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    },
    quantity: {
        type: String
    },
    status: {
        type: String
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

module.export  = mongoose.model('Review', Review)