const mongoose=require('mongoose')

const schema=mongoose.Schema

const placematschema=new schema({
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

const mong=mongoose.model('placemats',placematschema)

module.exports=mong