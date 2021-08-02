const mongoose=require('mongoose')

const schema=mongoose.Schema

const dummyordersschema=new schema({

    token:{
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    contact:{
        type:Number
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    pin:{
        type:Number
    },
    addressline1:{
        type:String
    },
    addressline2:{
        type:String
    },
    type:{
        type:String
    },
    category:{
        type:String
    },
    productname:{
        type:String
    },
    model_number:{
        type:String
    },
    price:{
        type:Number
    },
    offer:{
        type:Number
    },
    discountprice:{
        type:Number
    },
    quantity:{
        type:Number
    },
    orderid:{
        type:String
    },
    currency:{
        type:String
    },
//     createdAt: {
//         type: Date, expires:86000, default: Date.now
//    }
})

const mong=mongoose.model('dummyorders',dummyordersschema)

module.exports=mong