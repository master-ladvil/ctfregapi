const router = require("express").Router();
const falgmod = require('../models/flagmodel')


router.post('/', async (req, res) => {
    const normieuser = {
        admin:"Lord_sirCechs",
        password : "malevolent_Shrine" 
    }
    if (req.body.admin === normieuser.admin && req.body.password === normieuser.password){
        const responsed = {
            flag : "no more flags in this round go for next round"
        }
        return res.send(responsed)
    }
})

module.exports = router
