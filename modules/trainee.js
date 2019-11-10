const mongoose = require('mongoose');

var traineeSchema = new mongoose.Schema({
    fullName:{//name of trainee
        type:String
    },
    id:{//trainee's id
        type:String
    },
    pass:{//trainee's password
        type:String
    },
    grades:{//the list of grades he got overtime
        type:Array
    },
    currentCourse:{//the specific course he is focused on at the moment
        type:String
    },
    trainer:{//the trainer's name
        type:String
    },
    year:{//the year he studies on
        type:Number
    }
})
//exports the trainee model to any who require it
mongoose.model('trainee',traineeSchema)