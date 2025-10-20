const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const port = 7777;

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
});

app.listen(port=>{
    console.log("app run on port "+port)
})
