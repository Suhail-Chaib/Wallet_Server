"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const amountSchema = new mongoose.Schema({
    amount: {
        type: Number
    },
    n: {
        type: String
    }
});
const amount = mongoose.model("amount", amountSchema);
module.exports = amount;
//# sourceMappingURL=amount.js.map