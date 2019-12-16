const mongoose = require('mongoose');

const fileScheme = new mongoose.Schema({
    id: {//file's id
        type: String
    },
    fileName: {//file's name
        type: String
    },
    fileInfo:{//file's content
        type: String
    },
})

//exports the officer to any file that requires
module.exports = mongoose.model('file', fileScheme);