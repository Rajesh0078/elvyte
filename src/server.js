const express = require("express");
const app = express();
require("./config/dbConnect")
const User = require("./models/userSchema")
const path = require("path")
const hbs = require("hbs");
const bodyParser = require("body-parser");
const port = process.env.Port || 4000


const staticPath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")
const cssPath = path.join(__dirname,"../public")
app.use("/css", express.static(cssPath))
app.use("/public", express.static(staticPath))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticPath))
app.use(express.static(templatePath))
hbs.registerPartials(partialPath)

app.set("view engine", "hbs")
app.set("views", templatePath)

app.get("/", (req,res)=>{
    res.render("index")
})
app.get("/registration", (req,res)=>{
    res.render("registration")
})
app.get("/home", (req,res)=>{
    res.render("index")
})

app.post("/register", async(req,res)=>{
    try {
        const email = req.body.email
        const finduser =await User.findOne({email:email})
        if(!finduser){
            const userData =await new User(req.body)
            await userData.save()
            res.render("index")
        }
        else{
            res.json({
                msg:"user already exists"
            })
        }
    } catch (error) {
        console.log(error)
    }
})

app.post("/home", async(req,res)=>{
        try{
            const email = req.body.email
            const password = req.body.password
            const findPass = await User.findOne({password:password})
            const finduser = await User.findOne({email:email})
            if(finduser && findPass){
                res.render("home")
            }
            else{
                res.json({
                    msg:"validation failed"
                })
            }
        }
        catch (error){
            res.json(error)
        }

})




app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})