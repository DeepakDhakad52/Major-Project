const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    }
})

module.exports = mongoose.model("discount", discountSchema);