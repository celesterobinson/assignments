const express = require("express");
const bodyParser = require("body-parser");

let instruments = require("./instrumentsDatabase.js");
let logger = require("./logger.js");
let sizer = require("./sizer.js");

const app = express();
let port = 8083;

app.use(logger);
app.use(bodyParser.json());
app.use(sizer(instruments));

app.get("/instruments", (req, res) => {
    res.send({
        data: instruments,
        size: res.size
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})