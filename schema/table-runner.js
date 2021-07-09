const mongoose=require('mongoose')

const schema=mongoose.Schema

const tablerunnerschema=new schema({
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

const mong=mongoose.model('table-runners',tablerunnerschema)

module.exports=mong