const mongoose = require("mongoose");
const validator = require("validator");

//validator are used to check useer input is right or not

const userschema = mongoose.Schema({
    name : {
        type:String,
        require:true,
        minlength:3
    },
    phone :{
        type: Number,
        require : true,
        min: 10
        
    },
    email : {
        type : String,
        require:true,
        validator(value){
            if(validator.isEmail(value)){
                throw new Error("invalid email!....");
            }

        }
    },
    message : {
        type : String,
        require : true,
        minlength : 3
    }

})

//we need a collection
const User = mongoose.model("User", userschema) 
module.exports =  User;