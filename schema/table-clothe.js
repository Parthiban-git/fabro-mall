const mongoose=require('mongoose')

const schema=mongoose.Schema

const tableclotheschema=new schema({
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

const mong=mongoose.model('table-clothes',tableclotheschema)

module.exports=mong