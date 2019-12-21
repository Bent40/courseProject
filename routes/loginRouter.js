const express = require("express");
const router = express.Router();

//returns to the home page a simple text
router.get('/login/:username',async(req,res)=>{    
    const foundFiles = await fileModule.find({params:req.params,query:req.query});
    res.json(foundFiles);
})

module.exports = router;