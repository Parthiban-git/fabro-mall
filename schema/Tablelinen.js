const mongoose=require('mongoose')

const schema=mongoose.Schema

const Tablelinenschema=new schema({
    
    products:{
        type:Object
     },
    Name:{
        type:String,
        default:"Tablelinen"
    }
},{
    timestamps:true
})

const mong=mongoose.model('Tablelinen',Tablelinenschema)

module.exports=mong