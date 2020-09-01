const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currencies');


router.get('', currencyController.getCurrencies);

module.exports = router;