const express = require("express");
const app = express();

app.listen(3000, ()=>{
    console.log("app is running")
})

app.get("/", (req,res)=>{
    res.send(`<h1>This is my home page</h1>`)
    console.log("this is Home page")
})