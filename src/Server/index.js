const express=require("express");
const bodyParser=require("body-parser");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();
const app=express();
const axios=require("axios");
app.use(bodyParser.urlencoded({extended:true}));
const {Student,Teacher}=require("../db");
const key="abc123";
var student=false;
var teacher=false;
app.listen(5000,()=>{
    console.log("server 5000 is on");
});
app.post("/auth",async(req,res)=>{
    console.log("in auth");
    try{
        // const {error}=validate(req.body);
        console.log("in try");
        // if(error)
        // return res.status(400);
        const user1=await Student.findOne({email:req.body.Uid});
        const user2=await Teacher.findOne({email:req.body.Uid});
        console.log(user1);
        console.log(user2);
        if(user2){
            const validpw=await bcrypt.compare(
                req.body.pw,
                user2.password
            )
            if(!validpw){
                res.status(400).send({message:"Invalid email or password"});
            }
            teacher=true;
            const token=jwt.sign({_id:user2._id},process.env.MYKEY,{expiresIn:"3d"});
            console.log(token);
            // await axios.post("http://localhost:3000/",teacher);
            console.log(validpw);
        }
        if(user1){
            const validpw=await bcrypt.compare(
                req.body.pw,
                user1.password
            )
            if(!validpw){
                res.status(400).send({message:"Invalid email or password"});
            }
            console.log(validpw);
            student=true;
            // const token=jwt.sign({_id:user1._id},key,{expiresIn:"3d"});
            // if(token){
            //     window.location="http://localhost:3000/student/dashboard";
            // }
            // await axios.post("http://localhost:3000/",student);    
        }
        else{
            console.log("in else");
            res.status(400).send({message:"Invalid email or password"});
        }

    }
    catch(error){
        console.log("in catch");
        res.status(500).send({message:"Server error"});
    }
});
 