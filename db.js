const mongoose=require('mongoose');

const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb+srv://dibakardey63:iY17ClR7URKnRuCl@recipes.rglhoml.mongodb.net/Contact')
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDb