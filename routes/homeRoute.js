const express = require("express");
const router = express.Router();
const officer = require('../modules/officer');

//returns to the home page a simple text
router.get('/',(req,res)=>{
    res.send(req.body.fullName);
})

//here to test posts, just to see what req.body gives
router.post('/', (req,res) =>{
    const newofficer = new officer(req.body.fullName,req.body.id,req.body.pass);
    res.json(newofficer.saveOfficer());
})

module.exports = router;