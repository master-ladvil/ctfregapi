const flagentrymod = require("../models/flagentrymodel")

module.exports = function(req,res,next){
    const user = new flagentrymod({
        competitor : req.body.studentName
    })

    try{
        const initialised = user.save()

        next()
    }catch(err){res.send("invalid entry")}
}