const express = require('express');
const router = express.Router();
const flagmod = require('../models/flagmodel')


router.get('/', async (req, res) => {

    const getflags = await flagmod.find()
    res.json(getflags)
})


router.post('/', async (req, res) => {
    newflag = new flagmod({
        flag : req.body.flag
    })
    try{
        const upflag = await newflag.save()
        res.json(upflag).statusCode(200)
    }catch(err){res.json({message: err})}
})

router.delete('/', async(req, res) => {
    const delflag = req.body.flag
    try{
    const flagdel = await flagmod.deleteOne({flag : delflag})
    res.json(flagdel).statusCode(200)
    }catch(err){res.json({message: err})}
})


module.exports = router