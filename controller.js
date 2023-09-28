const product=require('./model');

const userController=async(req,res)=>{
   
    try {
        const {name,image,category,priceRange,price}=req.body;
        
        let users=await new product({name,image,category,priceRange,price}).save();
        res.status(201).send({
            success:true,
            message:"User saved successfully",
            users
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,message:'Error in Add data',
            error
        })
    }
}
const getAllData=async(req,res)=>{
    let users;
   try {
     users=await product.find()
     res.status(201).send({
        success:true,message:' users found sucessfully',
        users
     })
    
   } catch (error) {
    res.status(500).send({
        success:false,message:'No users found',
        users
     })
   }
}
const getById=async(req,res)=>{
    let id=req.params.id;
    let users;
    try {
        users=await product.findById(id)
        if(!users){
            res.status(500).send({
                success:false,
                message:"no product found with this id",
    
            })
        }
        res.status(200).send({
            success:true,
            message:"Product found with this id",
            users
        })

        
    } catch (error) {
       console.log(error) 
    }
    
}
const updateUsers=async(req,res)=>{
    let id=req.params.id;
    let users;
    try {
        const {name,image,category,priceRange,price}=req.body;
        newusers=await product.findByIdAndUpdate(id,{name,image,category,priceRange,price})
        users=await newusers.save()
        if(!users){
            res.status(500).send({
                success:false,
                message:"user is not updated",
    
            })
        }
        res.status(200).send({
            success:true,
            message:"User updated",
            users
        }) 
    } catch (error) {
        
    }
}
const deleteUsers=async(req,res)=>{
    let id=req.params.id;
    let users;
    try {
        users=await product.findByIdAndDelete(id)
        if(!users){
            res.status(500).send({
                success:false,
                message:"no users found with this id",
    
            })
        }
        res.status(200).send({
            success:true,
            message:"User Deleted",
            users
        })

        
    } catch (error) {
       console.log(error) 
    }
    
}

module.exports.userController=userController
module.exports.getAllData=getAllData
module.exports.getById=getById
module.exports.updateUsers=updateUsers
module.exports.deleteUsers=deleteUsers