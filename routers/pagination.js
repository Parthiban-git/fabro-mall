const express=require('express')

require('../database/mongoose')
const Fetch=require('../schema/home')

const Bedroom=require('../schema/Bedroom')
const Livingroom=require('../schema/Livingroom')
const Kitchen=require('../schema/Kitchen')
const Tablelinen=require('../schema/Tablelinen')
const Bathroom=require('../schema/Bathroom')
const { Promise } = require('mongoose')

const recentcollection=require('../schema/recentcollection')

const paginationrouter=new express.Router()


paginationrouter.post('/pagination',async(req,res)=>{
    const token=req.headers.authorization.split(" ")[1]
        // const token=req.body.token

    const {skip,limit}=req.body

   await recentcollection.findOne({token:token}).then((arrobj)=>{
       var arr=arrobj.sorted

       var curpage=skip/12+1
       var nxtpage=curpage+1

    if((arr.length)%12===0){
        var len=(arr.length)/12 
        res.send({
            skip:skip,
            limit:limit,
            current:{products:arr.slice(skip,skip+limit),currentpage:Math.ceil(curpage)},
            next:{products:arr.slice(skip+limit,skip+(limit*2)),currentpage:Math.ceil(nxtpage)},
            totalpages:len
        })
    }
    else{
        var len=(arr.length)/12+1
        res.send({
            skip:skip,
            limit:limit,
            current:{products:arr.slice(skip,skip+limit),currentpage:Math.ceil(curpage)},
            next:{products:arr.slice(skip+limit,skip+(limit*2)),currentpage:Math.ceil(nxtpage)},
            totalpages:len
        })
    }

   })
  
    
})


module.exports=paginationrouter
