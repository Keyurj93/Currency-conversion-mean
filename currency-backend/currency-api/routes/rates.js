const express = require('express');
const router = express.Router();
const ratesController = require('../controllers/rates');


router.get('', ratesController.getRefreshedRates);

module.exports = router;