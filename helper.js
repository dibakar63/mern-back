const bcrypt =require( 'bcrypt');
 const hashPassword=async(password)=>{
    try {
        const saltRounds=10;
       
     const hashedPassword=await bcrypt.hash(password,saltRounds)
     console.log(hashedPassword)
      return hashedPassword;
    } catch (error) {
     console.log(error)   
    }
}
 const comparePassword=async(password,hashedPassword)=>{
    return await bcrypt.compare(password,hashedPassword);
}

module.exports.hashPassword=hashPassword
module.exports.comparePassword=comparePassword