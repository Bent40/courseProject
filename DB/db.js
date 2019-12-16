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
connection = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};

const save =(async(req,res) => {
    mongoose.connect(url,connection);
    const offiSchem = new schema({//creates a schema using the info from obj
        fullName: req.body.fullname,
        id: req.body.id,
        pass: req.body.pass
    })//tries to connect to db and post it in the db
    try {
        const sentOfficer = await offiSchem.save();//sends the schema to the database
        console.log(sentOfficer);
    }//prints out any errors that might have occured
    catch (err) {
        console.log(err);
    }
    finally{
        mongoose.disconnect();;
    }
});


const getAll = async (req,res) => {
    mongoose.connect(url,connection);
    try{
        const allFiles = await schema.find();
        console.log(allFiles);
    }
    catch(err){
        console.log(err);        
    }
    finally{
    mongoose.disconnect();
    }
}

const remove = async(req,res)=>{
    mongoose.connect(url,connection);
    try{
        const removedOfficer = await schema.deleteMany({id:req.body.id});
        console.log(removedOfficer);
    }
    catch(err){
        console.log(err);
        
    }
    finally{
        mongoose.disconnect();
    }
}

const update = async(req,res)=>{
    mongoose.connect(url,connection);
    try{
        const removedOfficer = await schema.update({id:req.body.id},{
            $set:{
                fullname:req.body.fullName,
                id:req.body.id,
                pass:req.body.pass
            }
        });
        console.log(removedOfficer);
    }
    catch(err){
        console.log(err);
        
    }
    finally{
        mongoose.disconnect();
    }
}
module.exports={getAll,save,remove,update};