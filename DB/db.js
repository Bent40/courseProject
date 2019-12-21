const driver = require('mongo-driver');

const insert = async (url, collection, req, res) => {
    try {
       const result = await driver.connect(url)
            .then(async (db) => {
                console.log("successfully connected");
                const savedDocs = await db.insert(collection, req.body)
                return savedDocs;
            })
            return result;
    }
    catch (e) {
        return e;
    }
}

const find = async (url, collection, req, res) => {
    try {
        const result = await driver.connect(url)
            .then(async (db) => {
                console.log("successfully connected");
                const foundDocs = await db.find(collection,req.params,req.query);
                return foundDocs;
            })
            .catch((err) => {return err})
            return result;
    }
    catch (e) {
        return e;
    }
}

const update = async (url, collection, req, res) => {
    try {
        const result = await driver.connect(url)
            .then(async (db) => {
                console.log("successfully connected");
                const updatedDocs = await db.update(collection,req.params,{$set:req.body});
                return updatedDocs;
            })
            .catch((err) => {return err})
            return result;
    }
    catch (e) {
        return e;
    }
}
const remove = async (url, collection, req, res) => {
    try {
        const result = await driver.connect(url)
            .then(async (db) => {
                console.log("successfully connected");
                const removedDocs = await db.removeMultiple(collection,req.params);
                return removedDocs;
            })
            .catch((err) => {return err})
            return result;
    }
    catch (e) {
        return e;
    }
}
module.exports = { insert, find, update, remove };
