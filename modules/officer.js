const db = require("../DB/db");

class officer {

    constructor(fullname, id, password) {
        this.fullname = fullname;
        this.id = id;
        this.password = password;
    }

    officer2Json(){
        return {fullname:this.fullname, id:this.id,pass:this.password}
    }
    
    //makes an officer with the required schema
    saveOfficer() {
        db.save({body:this.officer2Json()})
    }
    findOfficer(){
        db.getAll({body:this.officer2Json()})
    }
    removeOfficer(){
        db.remove({body:this.officer2Json()});
    }
}
module.exports = officer;