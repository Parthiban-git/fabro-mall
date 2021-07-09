const mongoose=require('mongoose')

const schema=mongoose.Schema

const Livingroomschema=new schema({
    
    products:{
        type:Object
     },
    Name:{
        type:String,
        default:"Livingroom"
    }
},{
    timestamps:true
})

const mong=mongoose.model('Livingroom',Livingroomschema)

module.exports=mong