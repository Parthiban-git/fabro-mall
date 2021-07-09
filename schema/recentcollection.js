const mongoose=require('mongoose')

const schema=mongoose.Schema

const recentschema=new schema({
    recent:{
        type:Array
    },
    sorted:{
        type:Array
    },
    unsorted:{
       type:Array
    },
    token:{
        type:String
    }
},{
    timestamps:true
})

const mong=mongoose.model('recentcollection',recentschema)

module.exports=mong