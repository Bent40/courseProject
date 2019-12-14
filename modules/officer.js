const dbActions = require("../DB/db");
const db = new dbActions();

class officer {

    constructor(fullname, id, password) {
        this.fullname = fullname;
        this.id = id;
        this.password = password;
    }

    officer2Json() {
        return { fullname: this.fullname, id: this.id, pass: this.password };
    }
    //makes an officer with the required schema
    saveOfficer() {
        return (db.insert(this.officer2Json()));
    }
}
module.exports = officer;