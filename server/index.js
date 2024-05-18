const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

const UserModel = require('./models/User')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/check')



app.get('/getusers',(req,res)=>{
   UserModel.find()
    .then(users => res.json({'users': users}))
    .catch(err => res.json(err))
})


app.listen(3001,()=>{
    console.log("Server is running")
})