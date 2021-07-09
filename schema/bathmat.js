const mongoose=require('mongoose')

const schema=mongoose.Schema

const bathmatschema=new schema({
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

const mong=mongoose.model('bathmat',bathmatschema)

module.exports=mong