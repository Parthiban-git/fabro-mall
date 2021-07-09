const express=require('express')
require('../database/mongoose')

const User=require('../schema/signup')
const Userdup=require('../schema/signupdup')

const verifyemailrouter=new express.Router()

verifyemailrouter.post('/verifyemail',async(req,res)=>{

    const {email}=req.body

    var emailcheck=await User.find({email})

    if(emailcheck.length>0){
        res.status(401).send("email already present")
    }

    else{
        res.status(200).send("new email")
    }

})    
   


module.exports=verifyemailrouter