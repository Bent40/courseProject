const mongoose = require('mongoose');

const schema = require('../modules/fileScheme');//the schema for the officer

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
    const file = new schema({//creates a schema using the info from obj
        id: req.body.id,
        fileName: req.body.fileName,
        fileInfo: req.body.fileInfo
    })//tries to connect to db and post it in the db
    try {
        const savedFile = await file.save();//sends the schema to the database
        console.log("Success");
        return savedFile;
    }//prints out any errors that might have occured
    catch (err) {
        return err;
    }
});


const getAll = async (req,res) => {
    mongoose.connect(url,connection);
    try{
        const allFiles = await schema.find(req.body);
        return  allFiles
    }
    catch(err){
        return err;
    }
}

const remove = async(req,res)=>{
    mongoose.connect(url,connection);
    try{
        const removedFiles = await schema.deleteMany({id:req.body.id});
        return removedFiles
    }
    catch(err){
        return err;
        
    }
}

const update = async(req,res)=>{
    mongoose.connect(url,connection);
    try{
        const updatedFiles = await schema.update({id:req.body.id},{
            $set:{
                id:req.body.id,
                fileName:req.body.fileName,
                fileInfo:req.body.fileInfo
            }
        });
        return updatedFiles
    }
    catch(err){
        return err;
    }
}
module.exports={getAll,save,remove,update};