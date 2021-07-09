const mongoose=require('mongoose')

const schema=mongoose.Schema

const windowcurtainschema=new schema({
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

const mong=mongoose.model('window-curtains',windowcurtainschema)

module.exports=mong