const mongoose = require("mongoose")

const regmod = mongoose.Schema({
    studentName : {
        type: String,
        required: true
    },
    phoneNumber : {
        type: String,
        required: true,
        min: 9,
        max:10,
        unique: true
    },
    email : {
        type: String,
        required: true,
        min: 14
    },
    collegeName : {
        type: String,
        required: true
    },
    collegeRegId : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("registeredstuds", regmod)