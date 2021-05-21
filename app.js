const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended : true }))
app.use(cors())

const regrouter = require('./routes/register')
const logrouter = require('./routes/login')
const flagrouter = require('./routes/flag')
app.use('/register',regrouter)
app.use('/ctf',logrouter)
app.use('/flag',flagrouter)

const  url  =  process.env.url
//const url = "mongodb://localhost:27017/ctfreg"
const  connect  =  mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true })
connect.then(db  =>  {
    console.log("connected correctly to the server")})


app.get('/',(req,res) => {
    res.send("whamu!")
})


PORT = process.env.port || 4500

app.listen(PORT, () => {
    console.log("Antena fixed")
})