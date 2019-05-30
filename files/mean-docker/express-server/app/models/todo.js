var mongoose = require('mongoose');

// Define the schema
module.exports = mongoose.model('Todo', {
    balance: {
        type: Number,
        default: 0
    },

    account:{
        type:String,
        default:''
    },
    password: {
        type: password,
        default:''
    }

});
