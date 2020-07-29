const mongoose = require('mongoose');


let User = new mongoose.Schema({
    username: {
        type: String
        //maxlength:60
    },
    email: {
        type: String
        //unique: 1
    },
    role:{
        type: Number
    },
    password:{
        type: String
        //minlength: 5
    },
    productsList:{
        type: Array
    },
    orderList:{
        type:Array
    }

});

module.exports = mongoose.model('User', User);