const db = require("../DB/db");

class file {

    constructor(id,fileName, fileInfo) {
        this.id = id;
        this.fileName = fileName;
        this.fileInfo = fileInfo;
    }

    file2Json(){
        return {id:this.id, fileName:this.fileName, fileInfo:this.fileInfo}
    }
    
    //makes an officer with the required schema
    async save() {
        const savedFile = await db.save({body:this.file2Json()})
        return savedFile;
    }

    async find(){
        const foundFiles =  await db.getAll({body:this.file2Json()})
        return foundFiles;
    }

    async delete(){
        const removedFiles =  await db.remove({body:this.file2Json()});
        return removedFiles;
    }

    async update(req,res){
        const updatedFiles =  await db.update({params:req.params, body:this.file2Json()})
        return updatedFiles;
    }
}
module.exports = file;