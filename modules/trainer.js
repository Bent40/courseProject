const mongoose = require('mongoose');

var trainerSchema = new mongoose.Schema({
    fullName:{//trainer's full name
        type:String
    },
    id:{//trainer's id
        type:String
    },
    pass:{//trainer's password
        type:String
    },
    trainees:{//list of all students under the trainer at the moment
        type:Array
    }
})
//exports the trainer to all who require it
mongoose.model('trainer',trainerSchema)