const mongoose=require('mongoose')
const atlas='mongodb+srv://parthi:6382811325@cluster0.y5ixw.mongodb.net/fabromall?retryWrites=true&w=majority'
mongoose.connect(atlas,{
    useUnifiedTopology:true,
    useCreateIndex:true,
    useNewUrlParser:true
},()=>{
    console.log("connected to database")
})

module.exports=mongoose
