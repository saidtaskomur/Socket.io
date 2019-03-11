var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Light = mongoose.model("Light");


/* GET home page. */
router.get('/', function (req, res, next) {
  
  res.render('Light');
});

router.get('/findAll', function (req, res, next) {
  Light.find({}, function (error, docs) {
    return res.send(docs);
  });
  
});

Light.find({}, function (error, docs) {



});

module.exports = router;
