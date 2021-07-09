const mongoose=require('mongoose')

const Shema=mongoose.Schema

const validator=require('validator')

const userschema=new Shema({
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Not a valid mail')
            }
        }
    },
    password:{
        type:String,
        trim:true,
        required:true,
        validate(value){
            if(value.includes("PASSWORD")){
                throw new Error("Sorry please try another password")
            }
        }
    },
    name:{
        type:String,
        trim:true,
        required:true
    },
    otp:{
        type:Number
    },
    attempts:{
        type:Number,
        default:5
    },contact:{
        type:String,
        required:true        
    }
    // address:{
    //     type:String
    // },
    // state:{
    //     type:String
    // },
    // country:{
    //     type:String
    // }
    
},{
    timestamps:true
})

const mong=mongoose.model('signupdup',userschema)

module.exports=mong