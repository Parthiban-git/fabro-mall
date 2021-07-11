const express=require('express')
require('../database/mongoose')

const User=require('../schema/signup')
const Userdup=require('../schema/signupdup')

const profile=require('../schema/profile')
const cartwishlist=require('../schema/cart&wishlist')

const viewprofilerouter=new express.Router()
const editprofilerouter=new express.Router()

var wishlistlen=0

viewprofilerouter.post('/view-profile',async(req,res)=>{
    const token=req.headers.authorization.split(" ")[1]

    // const token=req.body.token

    await cartwishlist.findOne({token}).then(async(wishcartobj)=>{

          var totcart=wishcartobj.cart.length
          var profobj=await profile.findOne({token})

          if(wishcartobj.wishlist)
          {
                var wishlistkeys=Object.keys(wishcartobj.wishlist)

                wishlistkeys.forEach((ele)=>{              
                wishlistlen=wishlistlen+(wishcartobj.wishlist[ele].length)
               })
               
               res.send({name:profobj.name,img:profobj.img,pin:profobj.pin,country:profobj.country,email:profobj.email,state:profobj.state,addressline1:profobj.addressline1,addressline2:profobj.addressline2,contact:profobj.contact,cart:totcart,wishlist:wishlistlen})           
          }

          else
          {
            res.send({name:profobj.name,img:profobj.img,country:profobj.country,pin:profobj.pin,email:profobj.email,state:profobj.state,addressline1:profobj.addressline1,addressline2:profobj.addressline2,contact:profobj.contact,cart:totcart,wishlist:0})
          }
       

    })

})


editprofilerouter.post('/edit-profile',async(req,res)=>{

    const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token

    const {name,country,state,addressline1,addressline2,img,pin}=req.body

    if(img){
        await profile.updateOne({token},{$set:{img}}).then(()=>{
            // console.log("updated")
        })
    }

    if(name){
        await profile.updateOne({token},{$set:{name}}).then(()=>{
            // console.log("updated")
        })
    }
    
    if(country){
        await profile.updateOne({token},{$set:{country}}).then(()=>{
            // console.log("updated")
        })
    }

    if(state){
        await profile.updateOne({token},{$set:{state}}).then(()=>{
            // console.log("updated")
        })
    }

    if(addressline1){
        await profile.updateOne({token},{$set:{addressline1}}).then(()=>{
            // console.log("updated")
        })
    }

    if(addressline2){
        await profile.updateOne({token},{$set:{addressline2}}).then(()=>{
            // console.log("updated")
        })
    }

    if(pin){
        await profile.updateOne({token},{$set:{pin}}).then(()=>{
            // console.log("updated")
        })
    }


    await cartwishlist.findOne({token}).then(async(wishcartobj)=>{

        var totcart=wishcartobj.cart.length
        var profobj=await profile.findOne({token})

        if(wishcartobj.wishlist)
        {
              var wishlistkeys=Object.keys(wishcartobj.wishlist)

              wishlistkeys.forEach((ele)=>{              
              wishlistlen=wishlistlen+(wishcartobj.wishlist[ele].length)
             })
             
             res.send({name:profobj.name,img:profobj.img,country:profobj.country,pin:profobj.pin,email:profobj.email,state:profobj.state,addressline1:profobj.addressline1,addressline2:profobj.addressline2,contact:profobj.contact,cart:totcart,wishlist:0})
            }

        else
        {
            res.send({name:profobj.name,img:profobj.img,country:profobj.country,pin:profobj.pin,email:profobj.email,state:profobj.state,addressline1:profobj.addressline1,addressline2:profobj.addressline2,contact:profobj.contact,cart:totcart,wishlist:0})
        }
     

  })




})



module.exports={editprofilerouter,viewprofilerouter}