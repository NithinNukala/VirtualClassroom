const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://Nithin:nnr_26@cluster0.tr1r5bo.mongodb.net/teacherdb",{useNewUrlParser:true})
const tSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

