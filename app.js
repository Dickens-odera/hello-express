const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

app.get('/',(req, res)=>{
    res.send("Hello world");
});

app.listen(PORT,()=>{
    console.log("Server running on port "+ PORT);
});