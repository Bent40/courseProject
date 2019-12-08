const db = require("../DB/db");

class officer{

    constructor(fullname,id,password){
        this.fullname = fullname;
        this.id = id;
        this.password = password;
    }
    //makes an officer with the required schema
    saveOfficer(){
        //db.insert(url,collection,this.officer2Json);
        const dbInstance = new db();
        return (dbInstance.insert(this.officer2Json()));
    }
    officer2Json(){
        return {fullname:this.fullname,id:this.id,pass:this.password};
    }
}
module.exports = officer;