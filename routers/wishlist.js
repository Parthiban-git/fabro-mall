const express=require('express')
require('../database/mongoose')

const User=require('../schema/signup')
const Userdup=require('../schema/signupdup')

const recentcollection=require('../schema/recentcollection')
const profile=require('../schema/profile')
const cartwishlist=require('../schema/cart&wishlist')
const { findOne, listenerCount } = require('../schema/signup')

const addwishlistrouter=new express.Router()
const createwishlistrouter=new express.Router()
const viewwishlistrouter=new express.Router()

const deletewishproductrouter=new express.Router()
const deletewishlistrouter=new express.Router()

const replacewishlistrouter=new express.Router()
const renamewishlistrouter=new express.Router()


createwishlistrouter.post('/create-wishlist',async(req,res)=>{
    const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token

    const {name,product}=req.body

    if(product.length!=0)
    {
        var model_number=product[0].model_number

        var cartfind=await cartwishlist.findOne({token:token,cart:{$elemMatch:{model_number}}})
 
        if(cartfind!=null){
            var cart=cartfind.cart

            cartres=cart.filter((ele)=>{
                if(ele.model_number==model_number){
                    return ele.wishlist=true
                }
                if(ele.model_number!=model_number){
                    return ele
                }
            })

            await cartwishlist.updateOne({token},{$set:{[`wishlist.${name}`]:product}}).then(async()=>{
                // present in cart , added to wishlist
                await cartwishlist.updateOne({token},{$set:{cart:cartres}}).then(async()=>{

                    await cartwishlist.findOne({token}).then((obj)=>{
                        var wishlistnames=Object.keys(obj.wishlist)
                
                        res.send({wishlists:obj.wishlist,wishlistnames})
                    })

                })
            })                    

        }

        if(cartfind==null){
            await cartwishlist.updateOne({token},{$set:{[`wishlist.${name}`]:product}}).then(async()=>{
                await cartwishlist.findOne({token}).then((obj)=>{
                    var wishlistnames=Object.keys(obj.wishlist)
            
                    res.send({wishlists:obj.wishlist,wishlistnames})
                })
            })        
        }

    }

    if(product.length==0)
    {
         cartwishlist.updateOne({token},{$set:{[`wishlist.${name}`]:product}}).then(async()=>{
            await cartwishlist.findOne({token}).then((obj)=>{
                var wishlistnames=Object.keys(obj.wishlist)
        
                res.send({wishlists:obj.wishlist,wishlistnames})
            })
        })   
    }
    
})





addwishlistrouter.post('/add-wishlist',async(req,res)=>{
    const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token

    const {name,product}=req.body

    if(product.length!=0)
    {
        var model_number=product[0].model_number

        var cartfind=await cartwishlist.findOne({token:token,cart:{$elemMatch:{model_number}}})
 
        if(cartfind!=null){
            var cart=cartfind.cart

            cartres=cart.filter((ele)=>{
                if(ele.model_number==model_number){
                    return ele.wishlist=true
                }
                if(ele.model_number!=model_number){
                    return ele
                }
            })

            await cartwishlist.updateOne({token},{$push:{[`wishlist.${name}`]:product[0]}}).then(async()=>{
                // present in cart , added to wishlist
                await cartwishlist.updateOne({token},{$set:{cart:cartres}}).then(async()=>{
                    await cartwishlist.findOne({token}).then((obj)=>{
                        res.send(obj.wishlist)
                    })

                })
            })                    

        }

        if(cartfind==null){
            await cartwishlist.updateOne({token},{$push:{[`wishlist.${name}`]:product[0]}}).then(async()=>{
                await cartwishlist.findOne({token}).then((obj)=>{
                    res.send(obj.wishlist)
                })
            })        
        }

    }

        

})



viewwishlistrouter.post('/view-wishlist',async(req,res)=>{
    const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token

        var wishlistobj=await cartwishlist.findOne({token})

        if(wishlistobj.wishlist){
            res.send(wishlistobj.wishlist)
        }
        else{
            res.send({})
        }

})




deletewishproductrouter.post('/delete-wishproduct',async(req,res)=>{

    const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token

    const {name,model_number}=req.body
    
    var cartfind=await cartwishlist.findOne({token:token,cart:{$elemMatch:{model_number}}})


        if(cartfind!=null){

            var cart=cartfind.cart

            var cartres=cart.map((ele)=>{
                return (ele.model_number==model_number)?{...ele,wishlist:ele.wishlist=false}:ele
            })

            await cartwishlist.updateOne({token},{$pull:{[`wishlist.${name}`]:{model_number}}}).then(async()=>{
                // present in cart , added to wishlist
                await cartwishlist.updateOne({token},{$set:{cart:cartres}}).then(async()=>{
                   
                    var wishlistobj=await cartwishlist.findOne({token})

                    if(wishlistobj.wishlist){
                          res.send(wishlistobj.wishlist)
                    } 
                     else{
                          res.send({})
                     }

                })
            })                    

        }

        if(cartfind==null){

            await cartwishlist.updateOne({token},{$pull:{[`wishlist.${name}`]:{model_number}}}).then(async()=>{
                ///////
            })        
            var wishlistobj=await cartwishlist.findOne({token})

                    if(wishlistobj.wishlist){
                          res.send(wishlistobj.wishlist)
                    } 
                     else{
                          res.send({})
                     }
        }

})




deletewishlistrouter.post('/delete-wishlist',async(req,res)=>{

    const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token
    
    var wishlistobj=await cartwishlist.findOne({token})

    var keys=Object.keys(wishlistobj.wishlist)

    const {name}=req.body

    const deletekey=wishlistobj.wishlist[name]

    var modelnumberarray=deletekey.map((ele)=>{  // wishlist model numbrs
        return ele.model_number
    })

    var cart=wishlistobj.cart   // cart array

    modelnumberarray.forEach((model_number)=>{
        var index=cart.findIndex((ele)=>{
            return ele.model_number==model_number
        })
        if(index>=0)
        {
           replaceableobj={...cart[index],wishlist:false}
           cart.splice(index,1,replaceableobj)
        }
    })

    await cartwishlist.updateOne({token},{$set:{cart:cart}}).then(async()=>{
            console.log("cart been replaced")
      }) 

    if(keys.length>1)
    {
            await cartwishlist.updateOne({token},{$unset:{[`wishlist.${name}`]:name}}).then(()=>{
                console.log("deleted a wishlist in a many")
            })     

            await cartwishlist.findOne({token}).then((obj)=>{
                var wishlistnames=Object.keys(obj.wishlist)
        
                res.send({wishlists:obj.wishlist,wishlistnames})
            })
    }    

    if(keys.length<=1)
    {
            await cartwishlist.updateOne({token},{$unset:{[`wishlist.${name}`]:name}}).then(async()=>{
                await cartwishlist.updateOne({token},{$unset:{wishlist:{}}}).then(()=>{
                    console.log("deleted the last single wishlist")
                })
            })
            res.send({wishlists:{},wishlistnames:[]})
    } 
    

})



replacewishlistrouter.post('/replace-wishlist',async(req,res)=>{

    const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token

    const {fromwishlistname,towishlistname,model_number}=req.body

    var cartwishobj=await cartwishlist.findOne({token})

    const arrobj=cartwishobj.wishlist[fromwishlistname]

    var deletearr=arrobj.filter((ele)=>{
        return (ele.model_number===model_number)?ele:{}
    })

    await cartwishlist.updateOne({token},{$pull:{[`wishlist.${fromwishlistname}`]:deletearr[0]}}).then(()=>{
        // console.log("Deleted from from wishlist")
    })

    await cartwishlist.updateOne({token},{$push:{[`wishlist.${towishlistname}`]:deletearr[0]}}).then(()=>{
        // res.send("deleted from from wishlist and added to newwishlist")
    })

    var wishlistobj=await cartwishlist.findOne({token})

        if(wishlistobj.wishlist){
            res.send(wishlistobj.wishlist)
        }
        else{
            res.send({})
        }

})




renamewishlistrouter.post('/rename-wishlist',async function updateOne(req,res){
    const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token

    const {oldwishlistname,newwishlistname}=req.body

    var wishlistobj=await cartwishlist.findOne({token})

    var keys=Object.keys(wishlistobj.wishlist)

    var renamedobj={}
    
    
            keys.forEach(async(ele)=>{

                var variable=ele

                var presentobj=wishlistobj.wishlist[variable]

                if(ele==oldwishlistname){

                    var key=[`${newwishlistname}`]
                    
                    renamedobj[key]=presentobj
                    
                }

                else{

                    var key=[`${variable}`]

                    renamedobj[key]=presentobj
                   
                }                
                
        })

        await cartwishlist.updateOne({token},{$set:{wishlist:renamedobj}}).then(()=>{
            /// renamed
       })

       await cartwishlist.findOne({token}).then((obj)=>{

        var wishlistnames=Object.keys(obj.wishlist)

        res.send({wishlists:obj.wishlist,wishlistnames})
    })

})

module.exports={createwishlistrouter,addwishlistrouter,viewwishlistrouter,deletewishproductrouter,deletewishlistrouter,replacewishlistrouter,renamewishlistrouter}