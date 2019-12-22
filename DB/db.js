const driver = require('mongo-driver');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//gets a url and collection from the requester along with a the body of the new document. CANNOT BE EMPTY!
//it returns the inserted object(s) in the form of an object/ series of objects.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//gets a url and collection from the requester along with parameters and query to sort out and find specific documents
// (Both could be empty, resulting with the entire collection returning). it returns the results from its query to the collection
//in the form of an object/ series of objects.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//gets a url and collection from the requester along with parameters and the new body for the documents that are being updated
//(parameters could be empty, resulting in total collection change),
// it returns the amount of documents updated from the requested db and collection
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//gets a url and collection from the requester along with parameters for the removal (could be empty, resulting in total wipe)
//in it returns the amount of documents deleted from the requested db and collection
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
