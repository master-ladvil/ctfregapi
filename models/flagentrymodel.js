const mongoose = require("mongoose")

const flagentermod = mongoose.Schema({
    flag : {
        type : String,
        required : true
    },
    competitor : {
        type : String,
        required : true
    }

})

module.exports = mongoose.model("flagenteref", flagentermod)