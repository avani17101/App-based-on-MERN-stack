const mongoose = require('mongoose');


let  Product = new mongoose.Schema({
    productname: {
        type: String
    },
    price: {
        type: Number
    },
    reqquantity: {
        type: Number,
    },
    currquantity:{

        type: Number,
        default: 0
    },
    seller:{
        //type: String
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    // },
    // images:{
    //     type: Array
    // }

});

module.exports = mongoose.model('Product', Product);