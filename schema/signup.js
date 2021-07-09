const mongoose=require('mongoose')

const Shema=mongoose.Schema

const validator=require('validator')

const userschema=new Shema({
    email:{
        type:String,
        },
    password:{
        type:String,
    },
    name:{
        type:String, 
        required:true         
    },
    contact:{
        type:String       
    }
    // address:{
    //     type:String
    // },
    // state:{
    //     type:String
    // },
    // country:{
    //     type:String
    // }
},{
    timestamps:true
})

const mong=mongoose.model('signup',userschema)


module.exports=mong