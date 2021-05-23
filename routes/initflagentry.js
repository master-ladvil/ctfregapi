const flagentrymod = require("../models/flagentrymodel")

module.exports = function( req,res,next){
    const user = new flagentrymod({
        competitor : req.body.studentName
    })
    const findexist =  flagentrymod.findOne({"competitor" : req.body.studentName})
    if(findexist){return res.send("you have already registered")}
    try{
        const initialised = user.save()

        next()
    }catch(err){res.send("invalid entry")}
}