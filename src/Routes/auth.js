// const joi=require("joi");
// const passwordComplexity=require("joi-password-complexity");
const express=require("express");   

const bcrypt=require("bcrypt");
const {Student,Teacher}=require("../db");
const app=express();
var student,teacher;
app.get("/auth",async(req,res)=>{
    try{
        // const {error}=validate(req.body);
        if(error)
        return res.status(400);
        const user1=await Student.findOne({email:req.body.Uid});
        const user2=await Teacher.findOne({email:req.body.Uid});
        if(user2){
            const validpw=await bcrypt.compare(
                req.body.pw,
                user2.password
            )
            if(!validpw){
                res.status(400).send({message:"Invalid email or password"});
            }
            teacher=true;
        }
        else if(user1){
            const validpw=await bcrypt.compare(
                req.body.pw,
                user2.password
            )
            if(!validpw){
                res.status(400).send({message:"Invalid email or password"});
            }
            student=true;
            window.location='/dashboard';
        }
        else{
            res.status(400).send({message:"Invalid email or password"});
        }

    }
    catch(error){
        res.status(500).send({message:"Server error"});
    }
});
// const validate=(data)=>{
//     const schema=joi.object({
//         email:joi.string().email().required().label("Email"),
//         password:passwordComplexity().required().label("Password")
//     });
//     return schema.validate(req.body);
// }
export default {student,teacher};