const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/", (req, res) => {
    axios.get(req.body.url)
        .then(response => res.send(response.data));
})

app.listen(8080, () => {
    console.log("You don't have to pay attention to what I'm doing, it's all good I'm just messin around yo'");
});