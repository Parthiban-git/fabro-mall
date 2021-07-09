const mongoose=require('mongoose')

const schema=mongoose.Schema

const showercurtainschema=new schema({
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

const mong=mongoose.model('shower-curtain',showercurtainschema)

module.exports=mong