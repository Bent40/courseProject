const mongoose = require('mongoose');

require('../modules/officerSchema');//the schema for the officer
require('../modules/trainerScheme');//the schema for the trainer
require('../modules/traineeScheme');//the schema for the trainee

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
    useFindAndModify:false,
    useUnifiedTopology:true
});

insert = (obj) =>{
    console.log(obj);
    /*const offiSchem = new schema({
        fullName: obj.fullname,
        id: obj.id,
        pass: obj.password
    })//tries to connect to db and post it in the db
    try{
        const sentOfficer = await offiSchem.save();
        return sentOfficer;
    }//prints out any errors that might have occured
    catch(err){
        return {message: err};
    }*/
}