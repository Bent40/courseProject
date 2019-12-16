const express = require("express");
const router = express.Router();
const officer = require('../modules/officer');

//returns to the home page a simple text
router.get('/:id',(req,res)=>{
    const newofficer = new officer("",req.params.id,"")
    res.send(newofficer.findOfficer())
})

//here to test posts, just to see what req.body gives
router.post('/', (req,res) =>{
    const newofficer = new officer(req.body.fullName,req.body.id,req.body.pass);
    res.json(newofficer.saveOfficer());
})

router.delete('/:id',(req,res)=>{
    const newofficer = new officer("",req.params.id,"");
    res.json(newofficer.removeOfficer());
})

router.put('/:id')
module.exports = router;