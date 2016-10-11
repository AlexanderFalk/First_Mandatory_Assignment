var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile('index.json', 'utf-8', function(err, data){
        if(err) { 
            throw err;
            console.log(err);
        }
        res.render('index', JSON.parse(data));
    });
});

module.exports = router;
