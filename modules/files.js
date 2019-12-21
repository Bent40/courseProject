const db = require("../DB/db");

const dbInfo = require("../DBs");
const url = dbInfo.typeDb + "://" + dbInfo.dbUrl + "/" + dbInfo.dbs[0];
const collection = dbInfo.Collections[0];
//adds a file to the collection
const save = async (req) => {
    const insertedFiles = await db.insert(url, collection, { body: req.body });
    return insertedFiles;
}
//finds all files in the collection
const find = async (req) => {
    if (!req) {
        req = {
            params:{},
            query:{}
        };
    }
    try {
        const foundFiles = await db.find(url, collection, {params: req.params,query:req.query});
        return foundFiles;
    }
    catch (err) {
        return err;
    }
}


//removes files in the collection, differentiates by params
const remove = async (req) => {
    try {
        if (!req) {
            req = {
                params:{},
            };
        }
        const removedFiles = await db.remove(url, collection, { params: req.params });
        return removedFiles;
    }
    catch (err) {
        return err;
    }
}
//updates files by params, differentiates by params
const update = async (req) => {
    try {
        if (!req.params) {
            req.params={};
        }
        const updatedFiles = await db.update(url,collection,{ params: req.params, body: req.body });
        return updatedFiles;
    }
    catch (err) {
        return err;
    }
}
module.exports = { update, remove, find, save };