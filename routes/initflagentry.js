const flagentrymod = require("../models/flagentrymodel")

module.exports = function( req,res,next){
    
    const findexist =  flagentrymod.findOne({competitor : req.body.studentName})
    console.log(findexist)
}