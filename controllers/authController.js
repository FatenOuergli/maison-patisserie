const User= require("../models/userModel");
exports.Signup=async(req,res)=>{
  //  const{name,email,password,confirm_password}=req.body;
    try{
        const newUser=await User.create({
     name:req.body.name,
     email:req.body.email,
     password:req.body.password,
     confirm_password:req.body.confirm_password} );
        res.status(201).json({
            message:"User created !",
            data:newUser
        });
    }catch(error){
        res.status(400).json({
            message:"Error !!!"
        });
    }
}