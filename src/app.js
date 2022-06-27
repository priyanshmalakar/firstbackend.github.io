const express = require("express");
const path = require("path");
const hbs = require("hbs");
const User = require("./models/usermessage");

const {registerPartials} = require("hbs");
const { response } = require("express");

require("./db/conn")
const app = express();

const port = process.env.PORT ||80;


// setting the path 
const staticpath = path.join(__dirname, "../public");
const templatespath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");

//middleware
//path declare css 
app.use("/css", express.static(path.join(__dirname , "../node_modules/bootstrap/dist/css")))
app.use("/js", express.static(path.join(__dirname , "../node_modules/bootstrap/dist/js")))
app.use("/jq", express.static(path.join(__dirname , "../node_modules/jquery")))

app.use(express.urlencoded({extended :false}))
app.use(express.static(staticpath));

// app.set('views', path.join(__dirname))

app.set("view engine", "hbs");
app.set("views", templatespath);
hbs.registerPartials(partialspath);


// routinig
//app.get callback

//run hbs

app.get("/", (req, res) =>{
    res.render("index")
})



app.post("/contact", async(req,res) =>{
    try{
        // res.send(req.body);
        const userdata = new User(req.body);
         await userdata.Save();
         res.status(201).render("/");        
    }catch(error){
        res.status(500).send(error);
    }
})

// app.get("/",(req, res)=>{
//     res.end("hii bhai ho gya kaam express ka");
// })
app.listen(port, ()=>{
    console.log(`server is running ${port}`)
})