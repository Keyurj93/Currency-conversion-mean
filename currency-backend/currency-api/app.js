const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const currencyRoutes = require('./routes/currencies');
const rateRoutes = require('./routes/rates');
const conversionRoutes = require('./routes/conversion');
const app = express();

mongoose.connect("mongodb://localhost/currencydb").then(()=>{
    console.log("Connected to database");
}).catch(()=>{
    console.log("Connection to database failed");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE,OPTIONS')    
    next();
});
app.use('/currencies', currencyRoutes);
app.use('/refresh-rates', rateRoutes);
app.use('/convert', conversionRoutes);
module.exports = app;