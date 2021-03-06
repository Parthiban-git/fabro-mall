const express=require('express')
const bodyparser=require('body-parser')
const app=express()

// console.log(app)

const cors=require('cors')

const port=process.env.PORT || 3000

app.use(express.json())
app.use(bodyparser.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send("server side \"Deplyment Succeed\"")
})

const practicerouter=require('./routers/practice')

const verifyemailrouter=require('./routers/verify-email')
const signuprouter=require('./routers/signup')
const signupcheckrouter=require('./routers/signupcheck') 

const loginrouter=require('./routers/login')

const fetchhomerouter=require('./routers/fetchhome')

const fetchproductrouter=require('./routers/fetchproduct')
const filter_sortrouter=require('./routers/filter_sort')
const paginationrouter=require('./routers/pagination');

const suggestionrouter=require('./routers/suggestions')
const fetcheachproductrouter=require('./routers/fetcheachproduct')
const customer_reviewrouter=require('./routers/customerreview')


const {addwishlistrouter,createwishlistrouter,viewwishlistrouter,deletewishproductrouter,deletewishlistrouter,replacewishlistrouter,renamewishlistrouter}=require('./routers/wishlist')
const {addtocartrouter,viewcartrouter,deletefromcartrouter}=require('./routers/cart')

const {editprofilerouter,viewprofilerouter}=require('./routers/profile')

const order_summaryrouter=require('./routers/order_summary')
const {razorpayrouter,razorpayverificationrouter,billingrouter}=require('./routers/razorpay')

//////
app.use([verifyemailrouter,signuprouter,signupcheckrouter,loginrouter,fetchhomerouter,fetchproductrouter,suggestionrouter,fetcheachproductrouter,paginationrouter,filter_sortrouter,customer_reviewrouter,createwishlistrouter,addwishlistrouter,viewwishlistrouter,deletewishproductrouter,deletewishlistrouter,replacewishlistrouter,addtocartrouter,viewcartrouter,deletefromcartrouter,editprofilerouter,viewprofilerouter,renamewishlistrouter])

app.use(practicerouter)
app.use([order_summaryrouter,razorpayrouter,razorpayverificationrouter,billingrouter])

app.listen(port,()=>{
    console.log("port running")
})