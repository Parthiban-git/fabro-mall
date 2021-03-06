const express=require('express')

require('../database/mongoose')
const Fetch=require('../schema/home')

const Bedroom=require('../schema/Bedroom')
const Livingroom=require('../schema/Livingroom')
const Kitchen=require('../schema/Kitchen')
const Tablelinen=require('../schema/Tablelinen')
const Bathroom=require('../schema/Bathroom')

const fetcheachproduct=new express.Router()

const cartwishlist=require('../schema/cart&wishlist')

fetcheachproduct.post('/fetch_each_product',async(req,res)=>{
    try{
        const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token
    const {category,type,model_number}=req.body

    var arr=model_number.match(/\d{3,}/)
    var index=arr[0]
    var resindex=index-101

    var cartwishobj=await cartwishlist.findOne({token});

    var cart=await cartwishlist.find({token,cart:{$elemMatch:{model_number}}})

    var wishlistpresent=await cartwishlist.findOne({token,wishlist:{'$exists':true}})


    if(wishlistpresent==null)
    {
        // console.log(" null")

        if(cart.length==0)
        {

            await eval(category).findOne({Name:category}).then(async(obj)=>{
                const arr=obj.products[type]
                res.send(arr[resindex])
            })
        }
        if(cart.length>0)
        {
            await eval(category).findOne({Name:category}).then(async(obj)=>{
                const arr=obj.products[type]
                arr[resindex].wishlist=false
                arr[resindex].cart=true
                res.send(arr[resindex])
            })
        }
    }




    if(wishlistpresent!=null)
    {
        // console.log("not null")

        var wishlistkeys=Object.keys(cartwishobj.wishlist)

        var len=wishlistkeys.length

        var arr=[]
        var count=0
    
        cartwishlist.findOne({token}).then((ob)=>{
            const func=(()=>{
                return new Promise((resolve)=>{
                  wishlistkeys.forEach(async(ele)=>{
    
                       var variable=ele

                         if(ob)
                           { 
                                cartwishlist.find({[`wishlist.${variable}`]: {$elemMatch:{model_number}}}).then((resarr)=>{
                                  count+=1

                                  arr=[...arr,...resarr] 
                                  if(count===len)
                                  {
                                    //   console.log(count,"count")
                                    //   console.log(len,"len")

                                    //   console.log("arr",arr)
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
                            if(cart.length==0)
                            {
                                await eval(category).findOne({Name:category}).then(async(obj)=>{
                                    const arr=obj.products[type]
                                    arr[resindex].wishlist=false
                                    arr[resindex].cart=false
                                    res.send(arr[resindex])
                                })
                            }
                            if(cart.length>0)
                            {
                                await eval(category).findOne({Name:category}).then(async(obj)=>{
                                    const arr=obj.products[type]
                                    arr[resindex].wishlist=false
                                    arr[resindex].cart=true
                                    res.send(arr[resindex])
                                })
                            }
                          }

                      else
                          {
                            if(cart.length==0)
                            {
                                await eval(category).findOne({Name:category}).then(async(obj)=>{
                                    const arr=obj.products[type]
                                    arr[resindex].wishlist=true
                                    arr[resindex].cart=false
                                    res.send(arr[resindex])
                                })
                            }
                            if(cart.length>0)
                            {
                                await eval(category).findOne({Name:category}).then(async(obj)=>{
                                    const arr=obj.products[type]
                                    arr[resindex].wishlist=true
                                    arr[resindex].cart=true
                                    res.send(arr[resindex])                                })
                            }
                          }
                 
            })
        })
       
    }

    }
    catch(error){
        res.status(400).send(error)
    }
    
})

module.exports=fetcheachproduct