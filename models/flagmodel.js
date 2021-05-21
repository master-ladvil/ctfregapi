const mongoose = require("mongoose")

const flagmod = mongoose.Schema({
    flag : {
        type : String,
        required : true
    }

})

module.exports = mongoose.model("flags", flagmod)