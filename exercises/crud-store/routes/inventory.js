const express = require("express");
const inventoryRoute = express.Router();
const InventoryModel = require("../models/inventory");

inventoryRoute.get("/", (req, res) => {
    InventoryModel.find((err, inventory) => {
        if (err) return res.status(500).send(err);
        return res.send(inventory)
    });
});

inventoryRoute.post("/", (req, res) => {
    const newItem = new InventoryModel(req.body);
    newItem.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newItem)
    });
});

inventoryRoute.get("/:id", (req, res) => {
    InventoryModel.findById(req.params.id, (err, item) => {
        if (err) return res.status(500).send(err);
        return res.send(item)
    });
});

inventoryRoute.put("/:id", (req, res) => {
    InventoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedItem) => {
        if(err) return res.status(500).send(err);
        return res.send(updatedItem);
    });
});

inventoryRoute.delete("/:id", (req, res)=>{
    InventoryModel.findByIdAndRemove(req.params.id, (err, deletedItem)=>{
        if(err) return res.status(500).send(err);
        return res.send(deletedItem);
    });
});

module.exports = inventoryRoute;