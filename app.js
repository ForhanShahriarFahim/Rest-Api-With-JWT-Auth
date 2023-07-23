require("dotenv").config();
const express = require("express");
const app = express();

app.get("/api", (req,res)=>{
    res.json({
        success:1,
        message:"Rest Api is working..."
    })
})

app.listen(process.env.APP_PORT,()=>{
    console.log("port 3000 is running...");
});