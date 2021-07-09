const mongoose=require('mongoose')

const schema=mongoose.Schema

const comfortersetschema=new schema({
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

const mong=mongoose.model('comforterset',comfortersetschema)

module.exports=mong