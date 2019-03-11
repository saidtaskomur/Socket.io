var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Light = mongoose.model("Light");


/* GET users listing. */
router.get('/', function (req, res, next) {
  
});

router.post("/lambayak", function (req, res) {
  Light.findOne(
    {
      light_id: req.body.id
    },
    function (err, data) {
      Light.update({ light_id: req.body.id }, { state: !data.state }, function (err, resp) {
        return res.send({ id: data.light_id,value : !data.state});
      });

    });
    
});

router.post("/create", function (req, res, next) {

})

router.get("/create/:id", function (req, res, next) {

})

module.exports = router;

