const mongoose=require("mongoose")
const express= require('express')
const route=require('./routes/human')
const human=require('./model/human')
const app=express()
const Port= 3003 

app.use(express.json()) 

mongoose.connect('mongodb://localhost:27017/humans')
.then(()=>console.log('connected'))
.catch(error => console.log(error)) 

app.use('/human',route)

app.listen(Port, ()=>{ console.log(`localhos : ${Port}`)})