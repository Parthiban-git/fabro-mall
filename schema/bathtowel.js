const mongoose=require('mongoose')

const schema=mongoose.Schema

const bathtowelschema=new schema({
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

const mong=mongoose.model('bathtowel',bathtowelschema)

module.exports=mong