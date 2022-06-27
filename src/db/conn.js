const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/backend",{
    //   useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{

    console.log("connection is successfullyyyyy mongodb");

}).catch((error)=>{
    console.log("error");
    console.log(error);
})