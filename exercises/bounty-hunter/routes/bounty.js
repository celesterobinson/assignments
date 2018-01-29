const express = require("express");
const bountyRoute = express.Router();
const uuid = require("uuid");

let bounties = require("../bountiesDatabase.js");

bountyRoute.route("/")
    //handle all request to /bounties here
    //if its a GET
    .get((req, res) => {
        let query = req.query;
        let filteredBounties = bounties.filter((bounty)=>{
            let found = true;
            for (let key in query) {
                if (bounty[key] !== query[key]) {
                    found = false;
                    break;
                }
            }
            return found;
        })
        res.send(filteredBounties);
    })
    //if its a POST
    .post((req, res) => {
        let newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty);
        res.send({
            msg: "Data added successfully",
            data: newBounty
        })
    })

bountyRoute.route("/:id/")
    .get((req, res)=>{
        let {id} = req.params;
        let found = false;
        let foundBounty;
        for(let i = 0; i < bounties.length; i++) {
            if (bounties[i]._id === id) {
                found = true;
                foundBounty = bounties[i];
                break;
            }
        }
        if(found) {
            res.send({
                msg: `Item ${id} was found!`,
                data: foundBounty
            })
        } else {
            res.send({
                msg: `Item ${id} not found!`
            })
        }
    })
    .delete((req, res)=>{
        let {id} = req.params;
        let found = false;
        for(let i = 0; i < bounties.length; i++) {
            if (bounties[i]._id === id) {
                bounties.splice(i, 1);
                found = true;
                break;
            }
        }
        if(found) {
            res.send({
                msg: `Item ${id} was successfully removed!`
            })
        } else {
            res.send({
                msg: `Item ${id} was not found!`
            })
        }
    })
    .put((req, res)=> {
        let {id} = req.params;
        let updatedBounty = req.body;
        let found = false;
        for(let i = 0; i < bounties.length; i++) {
            if (bounties[i]._id === id) {
                bounties[i] = Object.assign(bounties[i], updatedBounty);
                updatedBounty = bounties[i];
                found = true;
                break;
            }
        }
        if (found) {
            res.send({
                msg: `Item ${id} was updated!`,
                data: updatedBounty
            })
        } else {
            res.send({
                msg: `Item ${id} not found!`
            })
        }
    })

module.exports = bountyRoute;