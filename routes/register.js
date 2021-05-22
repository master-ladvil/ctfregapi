const express = require('express');
const router = express.Router();
const regmod = require('../models/regmodel')
const flagentry = require("../models/flagentrymodel")
const initflagentry = require("./initflagentry")
router.get('/', async (req,res) => {
    try{
    const data = await regmod.find()
    res.json(data)
    }catch(err){res.json({message: err})}
})

router.get('/phone/:phoneid', async (req,res) => {

    try{
        const findnum = await regmod.findOne({phoneNumber : req.params.phoneid })
        res.json(findnum).status(200)
    }catch(err){
        res.json({
            message: err
        })
    }
})

router.post('/',initflagentry,async (req, res) => {
     const user = new regmod({
        studentName: req.body.studentName,
        phoneNumber : req.body.phoneNumber,
        email : req.body.email,
        password : req.body.password,
        collegeName : req.body.collegeName,
        collegeRegId : req.body.collegeRegId
        
    })
    
    const findnum = await regmod.findOne({phoneNumber : user.phoneNumber })
    if (findnum) {
        return res.send("account already exist!").status(400)
    }

    try{


    const upuser = await user.save()
    res.json(upuser).status(200)
    }
    catch(err){res.json({message:err}).sendStatus(400)}
})

module.exports = router;