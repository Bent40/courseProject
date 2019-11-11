require('../DB/db');//requires db actions

const express = require('express');
const genericController = require('../controllers/genericController');
var app = express();//makes a variable out of the server's action list

app.listen(3000,()=>{
    console.log("Server runnig at port: 3000")
})

app.use('/', genericController);