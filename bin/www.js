const port = (process.env.PORT || 3000);//sets a port given by the system or 3000 as a default value
const express = require('express');
const homeRoute = require('../routes/homeRoute'); //gets the middleware for the home page
const db = require('../DB/db');//requires db actions

var bodyParser = require("body-parser");
var app = express();//makes a variable out of the server's action list

app.use(bodyParser.json());
app.use('/',homeRoute);//route for the home page

app.listen(port,()=>{
    console.log("Server running at port: 3000") //runs the server on a port picked by the system, the default is 3000
})
