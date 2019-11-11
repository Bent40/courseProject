const mongoose = require('mongoose');

require('../modules/officer');//the schema for the officer
require('../modules/trainer');//the schema for the trainer
require('../modules/trainee');//the schema for the trainee

let url = 'mongodb://localhost:27017/courseDB';//a url for the connection to occur with

let db= mongoose.connection;//creates a variable out of the connection

//if the connection succeeds, start function
db.once('open', ()=>{
    console.log('Successfully connected');
})

//if the connection fails, print
db.on('error',e => {
    console.log(e);
})

//if the connection gets cut off
db.on('disconnected',()=>{
    console.log('Disconnected from db')
})

//connects with the specified url we gave it, and sets the settings to stop all possible depracations
mongoose.connect(url,{
    useNewUrlParser:true,
    userCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
});

