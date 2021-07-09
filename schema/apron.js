const mongoose=require('mongoose')

const schema=mongoose.Schema

const apronschema=new schema({
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

const mong=mongoose.model('apron',apronschema)

module.exports=mong