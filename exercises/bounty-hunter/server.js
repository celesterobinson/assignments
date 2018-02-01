const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const bountyRoute = require("./routes/bounty.js");
const blockchainRoute = require("./routes/blockchains.js");
const config = require("./config");

const app = express();

mongoose.connect("mongodb://localhost/bounty", (err) => {
    if (err) throw err;
    console.log("Connected to the database");
})

//middlewarea
app.use(bodyParser.json());
app.use()

//routes
app.use("/bounty", bountyRoute);
app.use("/blockchaines", blockchainRoute);

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
});