const mongoose = require("mongoose");

const rates = mongoose.model(
    "rates",
    new mongoose.Schema({
        rates: {},
        strict: false
    })
);

exports.ratesModel = rates;