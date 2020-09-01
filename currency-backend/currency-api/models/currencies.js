const mongoose = require("mongoose");

const currencyList = mongoose.model(
    "currencies",
    new mongoose.Schema({
        currencyList: {
            type: Array,
            required: true
        },
    })
);

exports.currenciesModel = currencyList;