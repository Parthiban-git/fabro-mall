const express=require('express')
require('../database/mongoose')

const Razorpay=require('razorpay')
const Shortid=require('shortid')
const crypto=require('crypto')

const dummyorders=require('../schema/dummyorders')
const orders=require('../schema/orders')

const path=require('path')

const razorpayrouter=new express.Router()
const razorpayverificationrouter=new express.Router()
const billingrouter=new express.Router()

const hbs = require('hbs')

const app = express()

// Define paths for Express config

const viewsPath = path.join(__dirname, '../templates/views')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)


const razorpay=new Razorpay({
    key_id:"rzp_test_0BykHemMDAXEcs",
    key_secret:"kq324ErWN2t2XEcJKlg0PtDR"
})


razorpayrouter.post('/razorpay',async(req,res)=>{

    const token=req.headers.authorization.split(" ")[1]
    // const token=req.body.token
    const payment_capture=1
    const currency="INR"

    const {product,quantity,profile}=req.body

   const discountprice=product.discountprice  
   const amount=(quantity*discountprice*100)

    try{

        const options={
            amount:amount.toString(),
            currency,
            receipt:Shortid.generate(),
            payment_capture,
        }

        const response=await razorpay.orders.create(options)

        var dummord=new dummyorders({
            token:token,
            name:profile.name,
            email:profile.email,
            contact:profile.contact,
            country:profile.country,
            state:profile.state,
            pin:profile.pin,
            addressline1:profile.addressline1,
            addressline2:profile.addressline2,
            type:product.type,
            category:product.category,
            productname:product.name,
            model_number:product.model_number,
            price:product.price,
            offer:product.offer,
            discountprice:product.discountprice,
            quantity:quantity,
            orderid:response.id,
            currency:currency
        })

        

        dummord.save().then(()=>{
            res.send({
                orderid:response.id,
                currency:response.currency,
                amount:response.amount,
                contact:profile.contact,
                email:profile.email             
            })
        })

    }

    catch(error){
         res.send("something wrong")
    }

})



razorpayverificationrouter.post('/verification',async(req,res)=>{

    const email=req.body.payload.payment.entity.email
    const orderid=req.body.payload.payment.entity.order_id

    const secret="12345678"

    const shasum=crypto.Hmac("sha256",secret)
    shasum.update(JSON.stringify(req.body))
    const digest=shasum.digest('hex')

    if(digest==req.headers['x-razorpay-signature']){

        var dummyorderfind=await dummyorders.findOne({email,orderid})


        if(dummyorderfind){
            var orderfind=await orders.findOne({token:dummyorderfind.token})


            if(orderfind)
            {          
                
                dummyorderfind={...dummyorderfind["_doc"],paymentinfo:req.body}

                console.log(dummyorderfind,"dummy")

                 await orders.updateOne({token:dummyorderfind.token},{$push:{orders:dummyorderfind}}).then(async()=>{
                    await dummyorders.deleteOne({email,orderid}).then(()=>{
                        app.get("/bill",(req,res)=>{
                            console.log(res)

                            res.render("index",{
                            username:dummyorderfind.name,
                            contact:dummyorderfind.contact,
                            productname:dummyorderfind.contact,
                            model_number:dummyorderfind.model_number,
                            orderid:dummyorderfind.orderid,
                            paymentid:req.body.payload.payment.entity.id,
                            discountprice:dummyorderfind.discountprice,
                            deliverycharge:30,
                            quantity:dummyorderfind.quantity
            
                          })
                        })
                    })
                 })


            }


            else
            {

                dummyorderfind={...dummyorderfind["_doc"],paymentinfo:req.body}

                console.log(dummyorderfind,"dummy")

                orders.insertMany({
                    orders:dummyorderfind,
                    token:dummyorderfind.token
                })
 
                await dummyorders.deleteOne({email,orderid}).then(()=>{
                    app.get("/bill",(req,res)=>{
                        console.log(res)

                        res.render("index",{
                        username:dummyorderfind.name,
                        contact:dummyorderfind.contact,
                        productname:dummyorderfind.contact,
                        model_number:dummyorderfind.model_number,
                        orderid:dummyorderfind.orderid,
                        paymentid:req.body.payload.payment.entity.id,
                        discountprice:dummyorderfind.discountprice,
                        deliverycharge:30,
                        quantity:dummyorderfind.quantity
        
                      })
                    })
                })

            }
        }
        

        res.json({status:"ok"})

    }


    else
    {
        res.status(401).send("unauthorized user ")
    }

    

}) 







billingrouter.post('/billing',async(req,res)=>{

})


app.get("/bill",(req,res)=>{
    console.log("get")

    res.render("index",{
    // username:dummyorderfind.name,
    // contact:dummyorderfind.contact,
    // productname:dummyorderfind.contact,
    // model_number:dummyorderfind.model_number,
    // orderid:dummyorderfind.orderid,
    // paymentid:req.body.payload.payment.entity.id,
    // discountprice:dummyorderfind.discountprice,
    // deliverycharge:30,
    // quantity:dummyorderfind.quantity

  })
})



module.exports={razorpayrouter,razorpayverificationrouter,billingrouter}
  
     