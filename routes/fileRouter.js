const express = require("express");
const router = express.Router();
const fileModule = require('../modules/generalModule');

//returns to the home page a simple text
router.get('/:id',async(req,res)=>{
    const newFile = new fileModule(req.params.id,"","")
    const foundFiles = await newFile.find();
    res.json(foundFiles);
})

router.get('/',async(req,res)=>{
    const newFile = new fileModule("","","")
    const foundFiles = await newFile.find();
    res.json(foundFiles);
})

//here to test posts, just to see what req.body gives
router.post('/', async(req,res) =>{
    const newFile = new fileModule(req.body.id, req.body.fileName,req.body.fileInfo);

})

router.delete('/:id',async(req,res)=>{
    const newFile = new fileModule(req.params.id,"","");
    const deletedFiles = await newFile.delete();
    res.json(deletedFiles);
})

router.put('/:id',async(req,res)=>{
    const newFile = new fileModule(req.params.id,"","");
    const updatedFiles = await newFile.update();
    res.json(updatedFiles);
})

module.exports = router;