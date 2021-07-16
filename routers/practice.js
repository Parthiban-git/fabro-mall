const express=require('express')
require('../database/mongoose')


const practice=require('../schema/practice')
const practicerouter=new express.Router()

practicerouter.get('/practice',(req,res)=>{

    // practice.createIndex( { "createdAt": 1 }, { expireAfterSeconds: 60 } ,()=>{
    //     console.log("created a index")
    // })

    practice.insertMany({
         name:"parthi",
         age:20
    },()=>{
        console.log("inserted")
    })
   

})


module.exports=practicerouter