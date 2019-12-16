const homeRoute = require('./routes/fileRouter'); //gets the middleware for the home page
var bodyParser = require("body-parser");// gets bodyparser so parsing into the database is easier
var express = require("express")
var app = express();//makes a variable out of the server's action list

app.use(bodyParser.json());
app.use('/',homeRoute);//route for the home page

module.exports = app;