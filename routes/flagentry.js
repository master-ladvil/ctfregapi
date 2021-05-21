const express = require("express");
const router = express.Router();
const flagentrymod = require("../models/flagentrymodel")
const flagmod = require("../models/flagmodel")

router.get('/', async (req, res) => {
    const findall = await flagentrymod.find();
    res.json(findall)
})

router.post('/', async (req, res) => {
    const enterflag = new flagentrymod({
        flag : req.body.flag,
        competitor : req.body.competitor
    })

    const findflag = await flagmod.findOne({flag : req.body.flag})
    if(!findflag){return res.json({message : "wrong flag!!"})}

    const findflag2 = await flagentrymod.findOne({flag : req.body.flag})
    if(findflag2){return res.json({message : "flag already entered by someone "})}
    try{
    const uploadflag = await enterflag.save()
    res.json(uploadflag).status(200)
    }catch(err){res.json(err)}
  

})




module.exports = router