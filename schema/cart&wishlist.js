const mongoose=require('mongoose')

const schema=mongoose.Schema

const myordersschema=new schema({
    cart:{
        type:Array
    },
    wishlist:{
        type:Object
    },
    token:{
        type:String
    }
})

const mong=mongoose.model('cart/wishlist',myordersschema)

module.exports=mong