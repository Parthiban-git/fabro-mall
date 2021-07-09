const mongoose=require('mongoose')

const schema=mongoose.Schema

const profileschema=new schema({
    email:{
        type:String
    },
    img:{
       type:String,
       default:""
    },
    name:{
       type:String
    },
    contact:{
        type:Number,
        unique:true
    },
    mycart:{
         type:Number
    },
    mywishlist:{
        type:Number
    },
    mycart:{
        type:Number
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    address:{
        type:String
    },
    token:{
        type:String
    }
},{
    timestamps:true
})

const mong=mongoose.model('profile',profileschema)

module.exports=mong