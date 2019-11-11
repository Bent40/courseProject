const express = require('express');
var router = express.Router();

exports.get('/',(req,res) =>{
    res.json('placeholder');
});

module.exports = router;