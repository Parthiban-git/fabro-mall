const User=require('../schema/signup')
require('../database/mongoose')

const express=require('express')

const bcrypt=require('bcrypt')

const loginrouter=new express.Router()

loginrouter.post('/login',async (req,res)=>{
    
        const postuserpass=req.body.password
        
        await User.findOne({email:req.body.email}).then((usermail)=>{
        if(usermail)    
        {         
            const compare=bcrypt.compareSync(postuserpass,usermail.password)
           if(compare)
            {
                   res.send({token:usermail._id,email:usermail.email,name:usermail.name})
            }
            else
            {
                res.status(401).send()
            }
        }
        else
        {
            res.status(401).send("")
        }
    }) 
})
        
module.exports=loginrouter
