const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();

mongoose.connect("mongodb://localhost/issue", (err)=>{
    if (err) throw err;
    console.log("Connected to the database");
});

//middleware
app.use(bodyParser.json());
app.use("/issue", require("./routes/issue"));

app.listen(config.port, ()=>{
    console.log(`Listening on port ${config.port}`);
});