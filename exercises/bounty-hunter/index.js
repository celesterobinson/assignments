const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");

const bountyRoute = require("./routes/bounty.js");
const blockchainRoute = require("./routes/blockchains.js");
const config = require("./config");

const app = express();

//middleware
app.use(bodyParser.json());

//routes
app.use("/bounty", bountyRoute);
app.use("/blockchaines", blockchainRoute);

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
});