const express=require('express')
require('../database/mongoose')

const Fetch=require('../schema/home')

const User=require('../schema/signup')
const Userdup=require('../schema/signupdup')

const cartwishlist=require('../schema/cart&wishlist')

const suggestionrouter=new express.Router()

suggestionrouter.post('/suggestions',(req,res)=>{

    try
    {
      const token=req.headers.authorization.split(" ")[1]
      //  const token=req.body.token

      Fetch.findOne({uniqueid : 1000}).then(async(ob)=>{


        const wishlistobj=await cartwishlist.findOne({token})

        var ans=await cartwishlist.findOne({token:token,wishlist:{ $exists: true}})
        
        if(ans!=null){
         var wishlistnames=Object.keys(wishlistobj.wishlist)
         res.send({suggestions:ob.suggestions,wishlistnames})
        }

        else{
         res.send({suggestions:ob.suggestions,wishlistnames:[]})
        }

       })
    }
    catch(error){
      res.status(400).send(error)
    }

})

module.exports=suggestionrouter