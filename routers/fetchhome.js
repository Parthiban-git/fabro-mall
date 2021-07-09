const express=require('express')

require('../database/mongoose')

const Fetch=require('../schema/home')

const fetchhomerouter=new express.Router()

fetchhomerouter.get('/fetch_home_products',async (req,res)=>{
      
      Fetch.findOne({uniqueid : 1000}).then((ob)=>{
            res.send(ob.home)
      })
})

module.exports=fetchhomerouter