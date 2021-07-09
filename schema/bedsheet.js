const mongoose=require('mongoose')

const schema=mongoose.Schema

const bedsheetschema=new schema({
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

const mong=mongoose.model('bedsheets',bedsheetschema)

module.exports=mong