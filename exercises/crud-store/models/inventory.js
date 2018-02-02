const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    isEdible: {
        type: Boolean,
        required: true
    },
    isAvailable: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("InventoryModel", inventorySchema);