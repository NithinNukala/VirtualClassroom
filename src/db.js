const mongoose=require("mongoose");
const joi=require("joi");
const passwordComplexity=require("joi-password-complexity");

mongoose.connect("mongodb+srv://Nithin:nnr_26@cluster0.tr1r5bo.mongodb.net/newdb",{useNewUrlParser:true});
const postSchema=new mongoose.Schema({
    email : {type:String,required:true},
    password: {type:String,required:true}
});
const Teacher=mongoose.model("Teacher",postSchema);
const Student=mongoose.model("Student",postSchema);

const validation=(data)=>{
    const Schema=joi.object({
    email:joi.string().email().required().label("Email"),
    password:passwordComplexity().required().label("Password")
    });
    return Schema.validation(data);
}

module.exports={Teacher,Student,validation}
