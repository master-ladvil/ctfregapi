const express = require('express');
const router = express.Router();
const regmod = require('../models/regmodel')
const flagmodel = require("../models/flagmodel")

router.post('/',async (req, res) => {
    
    const finduser = await regmod.findOne({email : req.body.email })
    if (!finduser) {
        return res.send("oops no access").status(400)
    }

    try{
        if (finduser.password === req.body.password) {
            const responsefortwo = {
                cypher : "lbhe frpbaq ebhaq ncv xrl vf uggcf://pgsert.urebxhncc.pbz/frpbaqebhaq ubyq baa!!! lbh tbg nabgure yvax uggcf://qevir.tbbtyr.pbz/svyr/q/1FunPF2SQLKgyLIxKxhFUTl_kPCj3NDt-/ivrj?hfc=funevat",
                flag: await flagmodel.findOne()
            }
            
            
            
            
            return res.send(responsefortwo)
        }
        else{
            return res.send("no flag for ya!!")
        }
    }
    catch(err){res.json({message: "contact dev @ telegram"}).sendStatus(400)}
})

module.exports = router;