const mongoose=require('mongoose')

const schema=mongoose.Schema

const Kitchenschema=new schema({
    
    products:{
        type:Object
     },
    Name:{
        type:String,
        default:"Kitchen"
    }
},{
    timestamps:true
})

const mong=mongoose.model('Kitchen',Kitchenschema)

module.exports=mong