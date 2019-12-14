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

class dbActions {//class that holds all of our functions that we wish to import to other places
    insert(obj) {//class function
        const runSave = (obj, async(resolve,reject) => {
            const offiSchem = new schema({//creates a schema using the info from obj
                fullName: obj.fullname,
                id: obj.id,
                pass: obj.pass
            })//tries to connect to db and post it in the db
            try {
                const sentOfficer = await offiSchem.save();//sends the schema to the database
                resolve(sentOfficer);
            }//prints out any errors that might have occured
            catch (err) {
                reject(err);
            }
        })
        runSave(obj)//call for the async function
        .then(resolve =>{console.log(resolve)})
        .catch(reject =>{console.log(reject)});
    }
    find(obj){
        const runfind = async(obj) =>{
            const res = await schema.find();
            return res;
        }
        console.log(runfind(obj));//call for async function
    }
}

module.exports = dbActions;