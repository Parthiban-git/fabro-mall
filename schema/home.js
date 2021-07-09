const mongoose=require('mongoose')

const schema=mongoose.Schema


const homeschema=new schema({
    uniqueid:{
        type:Number,
        default:1000
    },
    home:{
        type:Object
    },
    suggestions:{
        type:Array
    }
},{
    timestamps:true
})

const mong=mongoose.model("Homeproducts",homeschema)

module.exports=mong