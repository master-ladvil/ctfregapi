const router = require("express").Router();


router.post('/',  (req, res) => {
    const normieuser = {
        admin:"Lord_sirCechs",
        password : "malevolent_Shrine" 
    }
    if (req.body.admin === normieuser.admin && req.body.password === normieuser.password){
        return res.send("flag")
    }
})

module.exports = router