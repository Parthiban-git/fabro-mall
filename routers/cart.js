const express=require('express')
require('../database/mongoose')
const bcrypt=require('bcrypt')

const User=require('../schema/signup')
const Userdup=require('../schema/signupdup')

const recentcollection=require('../schema/recentcollection')
const profile=require('../schema/profile')
const cartwishlist=require('../schema/cart&wishlist')

const addtocartrouter=new express.Router()
const viewcartrouter=new express.Router()
const deletefromcartrouter=new express.Router()

addtocartrouter.post('/addto-cart',async(req,res)=>{

    const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token
    const {product}=req.body

    const model_number=product.model_number

    var cartfind=await cartwishlist.findOne({token:token,cart: {$elemMatch:{model_number}}}) 

    if(cartfind)
    {
        res.send("product already present in cart")
    }

    else
    {
         console.log("elseeeeee")

        var arr=[]
        var count=0
        
   await cartwishlist.findOne({token}).then(async(ob)=>{
       console.log(ob.wishlist)

       if(ob.wishlist==null)
       {
           console.log("no wishlist itself but add to cart")
                                    product.wishlist=false
                                    await cartwishlist.updateOne({token},{$push:{cart:product}}).then(()=>{
                                        res.send("added to cart not present in wishlist")
                                    })
                                
       }

       if(ob.wishlist)
       {
        var wishlistkeys=Object.keys(ob.wishlist)

        var len=wishlistkeys.length
    
                  const func=(()=>{
                      return new Promise((resolve)=>{
                        wishlistkeys.forEach(async(ele)=>{
          
                             var variable=ele
                               if(ob)
                                 { 
                                      cartwishlist.find({[`wishlist.${variable}`]: {$elemMatch:{model_number}}}).then((resarr)=>{
                                        count+=1
    
                                        console.log("count",count)
                                        console.log("length",len)
                                        console.log("resarr",resarr)
    
                                        arr=[...arr,...resarr] 
                                        if(count===len)
                                        {
                                            console.log("arr",arr)
                                            resolve(arr)
                                            
                                        }   
                                      
                                    })
                                                                               
                                  }                             
          
                         })
                      })
                  })
    
                  func().then(async(resp)=>{
                      
                           if(resp.length==0)
                                {
                                    product.wishlist=false
                                    await cartwishlist.updateOne({token},{$push:{cart:product}}).then(()=>{
                                        res.send("added to cart not present in wishlist")
                                    })
                                }
                            else
                                {
                                    product.wishlist=true
                                    await cartwishlist.updateOne({token},{$push:{cart:product}}).then(()=>{
                                        res.send("added to cart present in wishlist")
                                    })
                                }
                       
                  })
       }

    
      })

    }


})


////////////////////////

viewcartrouter.post('/view-cart',async(req,res)=>{
    const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token

    var cartwishobj=await cartwishlist.findOne({token})

    res.send(cartwishobj.cart)
    
})

/////////////////////////

deletefromcartrouter.post('/deletefrom-cart',async(req,res)=>{

    const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token

    const {product}=req.body
    const model_number=product.model_number

    await cartwishlist.updateOne({token},{$pull:{cart:{model_number}}}).then(()=>{
        //deleted 
    })
    var cartwishobj=await cartwishlist.findOne({token})

    res.send(cartwishobj.cart)

})


module.exports={addtocartrouter,viewcartrouter,deletefromcartrouter}
