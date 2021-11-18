const express=require('express')
require('../database/mongoose')
const bcrypt=require('bcrypt')

const nodemailer=require('nodemailer')
const { google }=require('googleapis')


const CLIENT_ID='827040839572-52lgnsq11u3ch9r76tj25tggddtdkgtk.apps.googleusercontent.com'
const CLIENT_SECRET='aWMBVDdc9IEEQb6-_XALpaoz'
const REDIRECT_URI='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN='1//04lrBIEAWDPxjCgYIARAAGAQSNwF-L9IrfiUzJvC1qvrcUnzO6LeP2GSwBF0gfINhYiydujqkJRbVzq0ozW1OglTJjLMzT3qq9os'
const oAuth2Client=new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)

oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})

const User=require('../schema/signup')
const Userdup=require('../schema/signupdup')

const recentcollection=require('../schema/recentcollection')
const profile=require('../schema/profile')
const myorders=require('../schema/cart&wishlist')

const signuprouter=new express.Router()

signuprouter.post('/signup',async(req,res)=>{

    const username=req.body.name
    const preuserpass=req.body.password
    const preuseremail=req.body.email
    const ph_number=req.body.contact

    const {country,state,addressline1,addressline2,pin}=req.body
    
    const hash=bcrypt.hashSync(preuserpass,9)

    var otp=Math.floor((99999-10000) * Math.random()+10000);
    
    const userhash=new Userdup({
        name:username,
        email:preuseremail,
        password:hash,
        contact:ph_number,
        otp,
        country,
        state,
        addressline1,
        addressline2,
        pin
    })
    
    await User.findOne({email:req.body.email}).then(async(user)=>{
        if(user)
        {
              res.status(401).send("email already exists")
        }
        else{

            await Userdup.findOne({email:req.body.email}).then(async(obj)=>{
                
                if(obj){
                      await Userdup.deleteMany({email:req.body.email}).then(()=>{
                    }).then(()=>{
                        userhash.save().then(()=>{

                                const accessToken=oAuth2Client.getAccessToken()

                                let transport = nodemailer.createTransport({
                                    service: 'gmail',
                                   auth: {
                                    type:'OAuth2',
                                   user: 'fabromall.e.tex@gmail.com',
                                   clientId:CLIENT_ID,
                                   clientSecret:CLIENT_SECRET,
                                   refreshToken:REFRESH_TOKEN,
                                   accessToken:accessToken
                                }
                                });
                                
                                let mailOptions = {
                                  from: ' fabroMall<fabromall.e.tex@gmail.com>',
                                  to: req.body.email,
                                  subject: 'Sign up and Start Booking',
                                   text: `OTP for fabroMall signup : ${otp} . Please don't share with anyone . If this is not you , please do ignore this`
                                };

                                transport.sendMail(mailOptions, function(err, data) {
                                if(err) 
                                {
                                console.log(err);
                                } else 
                                {
                                console.log('Email sent successfully');
                                }
                                })

                              res.send("otp sent to user")                        
                           
                        
                        })
                      })
                 }


                 else{
                    userhash.save().then(()=>{

                            const accessToken=oAuth2Client.getAccessToken()

                            let transport = nodemailer.createTransport({
                                service: 'gmail',
                               auth: {
                                type:'OAuth2',
                               user: 'fabromall.e.tex@gmail.com',
                               clientId:CLIENT_ID,
                               clientSecret:CLIENT_SECRET,
                               refreshToken:REFRESH_TOKEN,
                               accessToken:accessToken
                            }
                            });
                            
                            let mailOptions = {
                              from: 'fabroMall<fabromall.e.tex@gmail.com>',
                              to: req.body.email,
                             subject: 'Sign up and Start Booking',
                             text: `OTP for fabroMall signup  ${otp} . please don't share with anyone . If this is not you , please do ignore this`
                            };

                            transport.sendMail(mailOptions, function(err, data) {
                            if(err) 
                            {
                            console.log(err);
                            } else 
                            {
                            console.log('Email sent successfully');
                            }
                            })

                        res.send("otp sent to user")
                        
                        
                    })
                 }
            }) 

         }
    
    })

})



module.exports=signuprouter