const { currenciesModel } = require("../models/currencies");

module.exports = {

  getCurrencies: async (req, res) => {
    
    try {
     let currencyList = await currenciesModel.find({});
      res
        .status(200)
        .send({ status: { msg: "Success" }, result: currencyList });
    } catch (err) {
      console.log(err);
      res.status(400).send({ msg: err });
    }
  }
  
};