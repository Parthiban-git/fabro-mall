const mongoose=require('mongoose')

const schema=mongoose.Schema

const napkinschema=new schema({
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

const mong=mongoose.model('napkins',napkinschema)

module.exports=mong