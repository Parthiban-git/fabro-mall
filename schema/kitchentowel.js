const mongoose=require('mongoose')

const schema=mongoose.Schema

const kitchentowelschema=new schema({
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

const mong=mongoose.model('kitchen-towels',kitchentowelschema)

module.exports=mong