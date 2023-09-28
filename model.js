const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    
    priceRange:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
        
    }
})

module.exports=mongoose.model("products",userSchema)