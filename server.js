require('dotenv').config()
const Router=require('./routes/router')
const express=require('express')
const app=express()
app.use(express.json())
app.use("/",Router)
const port=4000


app.listen(port,()=>{
    console.log('listening to the port',port);
})