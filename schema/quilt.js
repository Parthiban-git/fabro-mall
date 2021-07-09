const mongoose=require('mongoose')

const schema=mongoose.Schema

const quiltschema=new schema({
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

const mong=mongoose.model('quilt',quiltschema)

module.exports=mong