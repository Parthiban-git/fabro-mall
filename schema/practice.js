const mongoose=require('mongoose')

const Schema=mongoose.Schema

const practiceschema=new Schema({
    name:{
        type:String
    },        
    age:{
        type:Number
    }
})

const mong=mongoose.model("practice",practiceschema)

mongoose.exports=mong