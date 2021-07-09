const mongoose=require('mongoose')

const schema=mongoose.Schema

const Bathroomschema=new schema({
    
    products:{
       type:Object
    },
    Name:{
        type:String,
        default:"Bathroom"
    }
},{
    timestamps:true
})

const mong=mongoose.model('Bathroom',Bathroomschema)

module.exports=mong