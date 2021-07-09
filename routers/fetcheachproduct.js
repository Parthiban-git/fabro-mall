const express=require('express')

require('../database/mongoose')
const Fetch=require('../schema/home')

const Bedroom=require('../schema/Bedroom')
const Livingroom=require('../schema/Livingroom')
const Kitchen=require('../schema/Kitchen')
const Tablelinen=require('../schema/Tablelinen')
const Bathroom=require('../schema/Bathroom')

const fetcheachproduct=new express.Router()

fetcheachproduct.post('/fetch_each_product',async(req,res)=>{
    
    const category=req.body.category
    const type=req.body.type
    const model_number=req.body.model_number

    var arr=model_number.match(/\d{3,}/)
    var index=arr[0]
    var resindex=index-101

    await eval(category).findOne({Name:category}).then(async(obj)=>{
        const arr=obj.products[type]
       res.send(arr)
    })

})

module.exports=fetcheachproduct