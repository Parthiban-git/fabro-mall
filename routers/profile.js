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
               
               res.send({name:profobj.name,img:profobj.img,country:profobj.country,state:profobj.state,address:profobj.address,mycart:totcart,mywishlist:wishlistlen})           
          }

          else
          {
            res.send({name:profobj.name,img:profobj.img,country:profobj.country,state:profobj.state,address:profobj.address,mycart:totcart,mywishlist:0})
          }
       

    })

})


editprofilerouter.post('/edit-profile',async(req,res)=>{

    const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token

    const {name,contact,country,state,address,img}=req.body

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
    if(contact){
        await profile.updateOne({token},{$set:{contact}}).then(()=>{
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
    if(address){
        await profile.updateOne({token},{$set:{address}}).then(()=>{
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
             
             res.send({name:profobj.name,img:profobj.img,country:profobj.country,state:profobj.state,address:profobj.address,mycart:totcart,mywishlist:wishlistlen})           
        }

        else
        {
          res.send({name:profobj.name,img:profobj.img,country:profobj.country,state:profobj.state,address:profobj.address,mycart:totcart,mywishlist:0})
        }
     

  })




})



module.exports={editprofilerouter,viewprofilerouter}