const mongoose=require('mongoose')

const schema=mongoose.Schema

const Bedroomschema=new schema({
    
    products:{
        type:Object
    },
    Name:{
        type:String,
        default:"Bedroom"
    }
},{
    timestamps:true
})

const mong=mongoose.model('Bedroom',Bedroomschema)

module.exports=mong