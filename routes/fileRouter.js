const express = require("express");
const router = express.Router();
const fileModule = require('../modules/files');

//returns to the home page a simple text
router.get('/:id',async(req,res)=>{    
    const foundFiles = await fileModule.find({params:req.params,query:req.query});
    res.json(foundFiles);
})

router.get('/',async(req,res)=>{
    const foundFiles = await fileModule.find();
    res.json(foundFiles);
})

//here to test posts, just to see what req.body gives
router.post('/', async(req,res) =>{
    const sentFiles = await fileModule.save({body:req.body});
    
    res.json(sentFiles);
})

router.delete('/:id',async(req,res)=>{
    const deletedFiles = await fileModule.remove({params:req.params});
    res.json(deletedFiles);
})

router.delete('/',async(req,res)=>{
    const deletedFiles = await fileModule.remove();
    res.json(deletedFiles);
})

router.put('/:id',async(req,res)=>{
    const updatedFiles = await fileModule.update({params:req.params,body:req.body});
    res.json(updatedFiles);
})
router.put('/',async(req,res)=>{
    const updatedFiles = await fileModule.update({ body:req.body});
    res.json(updatedFiles);
})

module.exports = router;