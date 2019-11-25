const express = require("express");
const router = express.Router();

//returns to the home page a simple text
router.get('/',(req,res)=>{
    res.send('this is the home page');
})

//here to test posts, just to see what req.body gives
router.post('/', (req,res) =>{
    console.log(req.body);
})

module.exports = router;