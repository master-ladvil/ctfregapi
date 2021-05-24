const express = require("express");
const router = express.Router();
const flagentrymod = require("../models/flagentrymodel")
const flagmod = require("../models/flagmodel");
const { patch } = require("./register");

router.get('/', async (req, res) => {
    const findall = await flagentrymod.find();
    res.json(findall)
})

router.post('/', async (req, res) => {


    const enterflag = new flagentrymod({
        competitor : req.body.competitor
    })

    //check the legit of the flag


    const finduser = await flagentrymod.findOne({competitor : req.body.competitor})
    if(!finduser){return res.send("sorry bro... enter the registered name... duhh....")}


    const findflag = await flagmod.findOne({flag : req.body.flag})
    if(!findflag){return res.json({message : "wrong flag!!"})}

    const findcount = await flagentrymod.findOne({competitor : req.body.competitor})
    if (findcount){
        
            const patchcount = await flagentrymod.updateOne(
            {competitor : req.body.competitor }, 
            {$set : {flagcount :findcount.flagcount +1 } })


            const delflag = req.body.flag
            const flagdel = await flagmod.deleteOne({flag : delflag})

            const responsedd = {
                statusOne : patchcount,
                statustwo : flagdel
            }     

            return res.json(responsedd)
       

        

    }
   
  

})




module.exports = router