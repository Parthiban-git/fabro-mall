const mongoose=require('mongoose')

const schema=mongoose.Schema

const pillowcoverschema=new schema({
    name:{
        type:String
    },
    type:{
        type:String
    },
    products:{
        type:Array
    }
})

const mong=mongoose.model('pillowcover',pillowcoverschema)

module.exports=mong