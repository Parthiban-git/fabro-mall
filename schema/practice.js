const mongoose=require('mongoose')

const schema=mongoose.Schema

const practiceschema=new schema({
    name:{
        type:String
    },        
    age:{
        type:Number
    },
    createdAt: {
         type: Date, expires:60, default: Date.now 
    }
})

const mong=mongoose.model("practice",practiceschema)

module.exports=mong

