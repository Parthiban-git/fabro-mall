const express=require('express')
require('../database/mongoose')
const bcrypt=require('bcrypt')

const User=require('../schema/signup')
const Userdup=require('../schema/signupdup')

const recentcollection=require('../schema/recentcollection')
const profile=require('../schema/profile')
const cartwishlist=require('../schema/cart&wishlist')

const signupcheckrouter=new express.Router()


signupcheckrouter.post('/signup_check',async(req,res)=>{

    Userdup.findOne({email:req.body.email}).then((dupobj)=>{
           
        if(dupobj.otp==req.body.otp)
        {
            User.insertMany({
                name:dupobj.name,
                email:dupobj.email,
                password:dupobj.password
            }).then((userobj)=>{
                res.send({status:200,attempts:true})

                var id=userobj[0]._id
                // var email=userobj[0].email
                var name=userobj[0].name

                var contact=dupobj.contact
                var country=dupobj.country
                var state=dupobj.state
                var addressline1=dupobj.addressline1
                var addressline2=dupobj.addressline2
                var pin=dupobj.pin


                const recentcoll=new recentcollection({
                    token:id
                })

                const prof=new profile({
                    token:id,
                        name,
                        contact,
                        country,
                        state,
                        addressline1,
                        addressline2,
                        pin
                })

                const cartwish=new cartwishlist({
                    token:id
                })

                recentcoll.save().then(()=>{
                    prof.save().then(()=>{
                        cartwish.save().then(()=>{
                            console.log("saved all of those")
                        })
                    })
                })

                // recentcollection.insertMany({
                //     token:id
                // }).then(()=>{
                //     profile.insertMany({
                //         token:id,
                //         name,
                //         contact,
                //         country,
                //         state,
                //         addressline1,
                //         addressline2,
                //         pin
                //     }).then(()=>{
                //         cartwishlist.insertMany({
                //             token:id
                //         }).then(()=>{
                //             console.log("cart wish and rercent and profile")
                //         })
                        
                //     })
                // })
                

                
                
            })

            Userdup.deleteMany({email:req.body.email}).then(()=>{
                // console.log("dup deleted due to org insertion")
            })
        }

        else if(dupobj.otp!=req.body.otp){
            var j=dupobj.attempts

            if(j>0){
                Userdup.updateOne({email:req.body.email},{attempts:j-1}).then(()=>{
                    Userdup.findOne({email:req.body.email}).then((dobj)=>{
                        // console.log(dobj)
                        if(dobj.attempts!=0){
                            res.send({status:401,attempts:true})
                          }
                          else{
                            res.send({status:401,attempts:false})
                          }
                    })
                })
            }
            else{
                Userdup.deleteMany({email:req.body.email}).then(()=>{
                    res.send({status:401,attempts:false})
                })
            }
            
            
        }
        
    })    
})

module.exports=signupcheckrouter