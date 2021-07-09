const mongoose=require('mongoose')

const schema=mongoose.Schema

const sofacoverschema=new schema({
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

const mong=mongoose.model('sofacover',sofacoverschema)

module.exports=mong