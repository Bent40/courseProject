const mongoose = require('mongoose');

const schema = require('../modules/officerSchema');//the schema for the officer

let url = 'mongodb://localhost:27017/courseDB';//a url for the connection to occur with

let db = mongoose.connection;//creates a variable out of the connection

//if the connection succeeds, start function
db.once('open', () => {
    console.log('Successfully connected');
})

//if the connection fails, print
db.on('error', e => {
    console.log(e);
})

//if the connection gets cut off
db.on('disconnected', () => {
    console.log('Disconnected from db')
})

//connects with the specified url we gave it, and sets the settings to stop all possible depracations
mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const save =async (req, res) => {
    const offiSchem = new schema({//creates a schema using the info from obj
        fullName: req.body.fullname,
        id: req.body.id,
        pass: req.body.pass
    })//tries to connect to db and post it in the db
    try {
        const sentOfficer = await offiSchem.save();//sends the schema to the database
        resolve(sentOfficer);
    }//prints out any errors that might have occured
    catch (err) {
        reject(err);
    }
}

const find = async (req,res) => {
}

module.exports={find,save};