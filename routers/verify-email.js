const express=require('express')
require('../database/mongoose')
const bcrypt=require('bcrypt')

const nodemailer=require('nodemailer')
const { google }=require('googleapis')



const User=require('../schema/signup')
const Userdup=require('../schema/signupdup')

const recentcollection=require('../schema/recentcollection')
const profile=require('../schema/profile')
const myorders=require('../schema/cart&wishlist')

const verifyemailrouter=new express.Router()

verifyemailrouter.post('/verifyemail',async(req,res)=>{

    const {email}=req.body

    var emailcheck=await User.find({email})

    if(emailcheck.length>0){
        res.send("email already present")
    }

    else{
        res.send("New email")
    }

})    
   


module.exports=verifyemailrouter