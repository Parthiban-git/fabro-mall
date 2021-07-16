const express=require('express')
require('../database/mongoose')

const User=require('../schema/signup')
const Userdup=require('../schema/signupdup')

const recentcollection=require('../schema/recentcollection')
const profile=require('../schema/profile')
const cartwishlist=require('../schema/cart&wishlist')

const ordersummaryrouter=new express.Router()

ordersummaryrouter.post('/order_summary',async(req,res)=>{
    const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token

    const {product}=req.body

    const type=product.type
    const category=product.category

    var userinfo=await profile.findOne({token})

    const Profile=new profile({
        name:userinfo.name,
        contact:userinfo.contact,
        email:userinfo.email,
        country:userinfo.country,
        state:userinfo.state,
        addressline1:userinfo.addressline1,
        addressline2:(userinfo.addressline2)?userinfo.addressline2:"",
        pin:userinfo.pin
    })

    // await eval(category).findOne({Name:category}).then((resp)=>{
    //     const keys=Object.keys(resp.products)

    //     var destproduct=keys.map(async(ele)=>{
    //         cartwishlist.find({[`wishlist.${variable}`]: {$elemMatch:{model_number}}})
    //     })
    //      const 
    // })

    res.send({product,profile:Profile})

})

module.exports=ordersummaryrouter