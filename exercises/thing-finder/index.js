const express = require("express");
const bodyParser = require("body-parser");

const logger = require("./logger");
let instruments = require("./instruments"); //database

const app = express();
let port = 8050;

app.use(bodyParser.json());
app.use(logger);

app.get('/instruments', (req, res) => {
    let query = req.query;
    let filteredInstruments = instruments.filter(instrument => {
        let found = true;
        for(let key in query) {
            if(instrument[key] != query[key]) {
                found = false;
                break
            }
        }
        return found;
    })
    res.send(filteredInstruments);
});

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
})