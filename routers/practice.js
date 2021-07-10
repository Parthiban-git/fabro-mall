const express=require('express')
require('../database/mongoose')


const practice=require('../schema/practice')

const practicerouter=new express.Router()

practicerouter.post('/practice',(req,res)=>{
    res.send("practice")
})


module.exports=practicerouter