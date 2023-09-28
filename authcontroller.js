const mongoose=require('mongoose');
const authModel=require('./authModel')
const JWT=require('jsonwebtoken')
const Password=require('./helper')
const comparePassword=require('./helper')

const registerController=async(req,res)=>{
    
    try {
        const {username,email,password}=req.body

        const existingUser=await authModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:"Already register please login"
            })
        }
        //register user
    const hashedPassword=await Password.hashPassword(password)
    //save
    const user=await new authModel({username,email,password:hashedPassword}).save()
    res.status(201).send({
        success:true,
        message:"User register successfully",
        user
    })

        
    } catch (error) {
        console.log(error);
    res.status(500).send({
        success:false,message:'Error in Registration',
        error
    }) 
    }
}

const loginController=async(req,res)=>{
    try {
     const {email,password}=req.body
     //validation
     if(!email || !password){
         return res.status(404).send({
             success:false,
             message:"Invalid email or password"
         })
     }
         const user=await authModel.findOne({email});
         if(!user){
             return res.status(404).send({
                 success:false,
                 message:"Invalid email"
             })
         }
         const match=await Password.comparePassword(password,user.password)
         if(!match){
             return res.status(200).send({
                 success:false,
                 message:"Password incorrect"
             })
 
         }
         //token
         const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
         res.status(200).send({
             success:true,
             message:"login successfully",
             user:{
                 name:user.name,
                 email:user.email,
                 
             },token
         })
 
      
    } catch (error) {
     console.log(error)
     res.status(500).send({
         success:false,
         message:"Error in login",error
     })
    }
 }
 module.exports.registerController=registerController
 module.exports.loginController=loginController