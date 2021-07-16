const mongoose=require('mongoose')

const schema=mongoose.Schema

const ordersschema=new schema({
    orders:{
        type:Array
    },
    token:{
        type:String
    }
})

const mong=mongoose.model('orders',ordersschema)

module.exports=mong