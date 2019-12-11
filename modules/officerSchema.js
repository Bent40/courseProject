const mongoose = require('mongoose');

const officerSchema = new mongoose.Schema({
    fullName: {//full name of the officer
        type: String
    },
    id: {//officer's id
        type: String
    },
    pass: {//officer's password
        type: String
    },

})
//exports the officer to any file that requires it
mongoose.model('officerSchema', officerSchema);