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

const recentcollection=require('../schema/recentcollection')
const profile=require('../schema/profile')

const customer_reviewrouter=new express.Router()

customer_reviewrouter.post('/customer_review',async(req,res)=>{

       const token=req.headers.authorization.split(" ")[1]
        //   const token=req.body.token

      const {review,rating,product}=req.body

      const model_number=product.model_number
      const type=product.type
      const category=product.category

      var profileobj=await profile.findOne({token:token})
      const name=profileobj.name
      const img=profileobj.img
      const email=profileobj.email

     const obj={
             name,
             email,
             img,
             rating,
             review
     }

      var arr=model_number.match(/\d{3,}/)
      var mod_no=arr[0]
      var index=mod_no-101

      await eval(category).updateOne({Name:category},{$push:{[`products.${type}.${index}.customer_review`]:obj}}).then(()=>{
              //// review added
      })

      await eval(category).findOne({Name:category}).then(async(obj)=>{
        const arr=obj.products[type]
        res.send(arr[index])
      })

})

module.exports=customer_reviewrouter