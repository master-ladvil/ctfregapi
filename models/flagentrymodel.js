const mongoose = require("mongoose")

const flagentermod = mongoose.Schema({
    flagcount : {
        type : Number,
        default : 0
    },
    competitor : {
        type : String,
        required : true
    }

    

})

module.exports = mongoose.model("flagenteref", flagentermod)