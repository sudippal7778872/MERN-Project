const mongoose = require("mongoose");
const DBUser = process.env.DB_USER;
const DBPassword = process.env.DB_PASSWORD;
const Database = process.env.DB_DB 
const DB  = `mongodb+srv://${DBUser}:${DBPassword}@cluster0.kwt4qdm.mongodb.net/${Database}?retryWrites=true&w=majority`



mongoose.connect(DB)
.then((res)=>{
    console.log("DB connected successfully");
})
.catch((err)=>{
    console.log("error occurend in DB connection",err)
})
