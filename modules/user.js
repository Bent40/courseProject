const db = require("../DB/db");//the db driver
const dbInfo = require("../DBs");//the configuration file for the database
const url = dbInfo.typeDb + "://" + dbInfo.dbUrl + "/" + dbInfo.dbs[0];// the url for our database
const collection = dbInfo.Collections[1];//the collection "file" which is the collection that stores files in our db

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// tries to insert a user into the database by sending the db the url of the db and its collection, along with the contents of
// the request's body, that is the user's registration information
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const save = async (req) => {
    try {
        const insertedUsers = await db.insert(url, collection, { body: req.body });
        return insertedUsers;
    }
    catch (err) {
        return err;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// requests from the db to find a user according to the parameters and query given the requester, along with the url of the db
// and the specific collection in which the user is found.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const find = async (req) => {
    try {
        if (!req) {
            req = {
                params: {},
                query: {}
            };
        }
        const foundUsers = await db.find(url, collection, { params: req.params, query: req.query });
        return foundUsers;
    }
    catch (err) {
        return err;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// requests the db to remove a user according to the parameters sent by the requester. send the url for the specific db as
// the collection from which the removal is needed
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const remove = async (req) => {
    try {
        if (!req) {
            req = {
                params: {},
            };
        }
        const deletedUsers = await db.remove(url, collection, { params: req.params });
        return deletedUsers;
    }
    catch (err) {
        return err;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// requests the db to update a user, and sends parameters for the user, along with a body given by the requester to which it
// needs to change. sends the url of the db as well as the collection that needs to be updated
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const update = async (req) => {
    try {
        if (!req.params) {
            req.params = {};
        }
        const updatedUsers = await db.update(url, collection, { params: req.params, body: req.body });
        return updatedUsers;
    }
    catch (err) {
        return err;
    }
}
module.exports = { update, remove, find, save };