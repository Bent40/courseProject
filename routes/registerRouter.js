const express = require("express");
const router = express.Router();
const userModule = require("../modules/user")//the module of users, through which you the db actions are preformed

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// requests to search the db for a specific username to see if the registered user exists already in the db
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/register/', async (req, res) => {
    try {
        req.params = { username: req.body.username }
        const foundUsers = await userModule.find({ params: req.params, query: req.query });
        res.json(foundUsers);
    }
    catch (err) {
        res.json(err);
    }
})

router.post('/register/', async (req, res) => {
    try {
        const insertedUsers = await userModule.save({ body: req.body });
        res.json(insertedUsers)
    }
    catch (err) {
        res.json(err);
    }
})

module.exports = router;