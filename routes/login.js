const express = require('express');
const router = express.Router();
const regmod = require('../models/regmodel')

router.post('/',async (req, res) => {
    
    const finduser = await regmod.findOne({email : req.body.email })
    if (!finduser) {
        return res.send("oops no access").status(400)
    }

    try{
        if (finduser.password === req.body.password) {
            return res.send("flag")
        }
        else{
            return res.send("no flag for ya!!")
        }
    }
    catch(err){res.json({message: "contact dev @ telegram"}).sendStatus(400)}
})

module.exports = router;