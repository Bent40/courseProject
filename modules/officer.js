const db = require("../DB/db");

class officer {

    constructor(fullname, id, password) {
        this.fullname = fullname;
        this.id = id;
        this.password = password;
    }

    //makes an officer with the required schema
    saveOfficer() {
        return db.save();
    }
}
module.exports = officer;