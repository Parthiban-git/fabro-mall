const express=require('express')
require('../database/mongoose')

//bedroom schema
const Bedroom=require('../schema/Bedroom')
// living room
const Livingroom=require('../schema/Livingroom')
//kitchen
const Kitchen=require('../schema/Kitchen')
// tablelinen
const Tablelinen=require('../schema/Tablelinen')
// bathroom
const Bathroom=require('../schema/Bathroom')

const User=require('../schema/signup')
const Userdup=require('../schema/signupdup')
//////////////////////////////////////////////////////
const recentcollection=require('../schema/recentcollection')
const profile=require('../schema/profile')
///////////////////////////////////////////////////////////////
const customer_reviewrouter=new express.Router()
///////////////////////////////////////////////////////////////////////

var customerid=1000

customer_reviewrouter.post('/customer_review',async(req,res)=>{

       customerid=1+customerid
       const token=req.headers.authorization.split(" ")[1]


      const {review,rating,model_number,type,category}=req.body

      var profileobj=await profile.findOne({token:token})
      const name=profileobj.name
      const img=profileobj.img
      const email=profileobj.email

     const obj={
             name,
             email,
             img,
             likes:[],
             rating,
             review,
             customerid
     }

      var arr=model_number.match(/\d{3,}/)
      var mod_no=arr[0]
      var index=101-mod_no

      var collectionobj= await eval(category).findOne({Name:category})
      var arrobj=collectionobj.products[type]


      await eval(category).update({Name:category},{$push:{[`products.${type}.${index}.customer_review`]:obj}}).then(()=>{
              res.send("review added")
      })
})

module.exports=customer_reviewrouter