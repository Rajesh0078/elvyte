const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://peketirajesh007:123@cluster0.ebqz3rl.mongodb.net/registration")
.then(()=>{
    console.log("db connected successfully")
})
.catch(()=>{
    console.log("db not connected")
})
