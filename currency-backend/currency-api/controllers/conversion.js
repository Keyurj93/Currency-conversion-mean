const { ratesModel } = require("../models/rates");

module.exports = {

    getConvertedCurrency: async (req, res) => {
    
    try {
    let currencies = { ...req.body };
     const currencyList = await ratesModel.find({});
     const ratesObject = currencyList[0].rates;
     let convertedRate = 0;
     if(currencies.from in ratesObject && currencies.to in ratesObject) {
        const valFrom = module.exports.getValue(ratesObject,currencies.from);
        const valTo = module.exports.getValue(ratesObject,currencies.to);
        convertedRate = currencies.amount * valTo/valFrom;
        // console.log('val ', convertedRate);
     }
      res
        .status(200)
        .send({ status: { msg: "Success" }, result: convertedRate });
    } catch (err) {
      console.log(err);
      res.status(400).send({ msg: err });
    }
  },
   getValue: (object, value) => {
   let matchedKeys = Object.keys(object).find(key => {
        if(key === value) {
            return key;
        }
    });
    return object[matchedKeys];
  }
};