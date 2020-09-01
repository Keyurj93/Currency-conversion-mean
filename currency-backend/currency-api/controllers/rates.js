
const request = require('request');
const { ratesModel } = require("../models/rates");


module.exports = {

    getRefreshedRates: async (req, res) => {
        try {
            request('https://api.exchangeratesapi.io/latest', { json: true }, (err, resp, body) => {
                if (err) { return console.log('error ', err); }
                if (body) {
                    let ratesUpdated = new ratesModel(body);
                    ratesUpdated =  ratesUpdated.save().then((saved, err) => {
                        res
                        .status(200)
                        .send({ status: { msg: "Success" } });
                    }).catch(err => {
                        console.log('error ', err);
                    });
                }
            });

        } catch (err) {
            console.log(err);
            res.status(400).send({ msg: err });
        }
    }

};