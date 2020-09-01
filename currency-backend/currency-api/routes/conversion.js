const express = require('express');
const router = express.Router();
const conversionController = require('../controllers/conversion');


router.post('', conversionController.getConvertedCurrency);

module.exports = router;