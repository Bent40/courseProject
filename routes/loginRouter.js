const express = require("express");
const router = express.Router();
const userModule = require("../modules/user")//the module of users, through which you the db actions are preformed

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// requests to search the db for a specific username and password gained inside the request's body
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/login/', async (req, res) => {
    try {
        req.params = { username: req.body.username, password: req.body.password }
        const foundUsers = await userModule.find({ params: req.params, query: req.query });
        res.json(foundUsers);
    }
    catch (err) {
        res.json(err);
    }
})

module.exports = router;