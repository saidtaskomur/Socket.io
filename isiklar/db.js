var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Light", { useMongoClient: true });

var Schema = mongoose.Schema;

var lightShema = new Schema({
    light_id: { type: Number, unique: true },
    state: Boolean
});

var Light = mongoose.model('Light', lightShema);

module.exports = Light;


///////////////////////////////////////////////////////////

// var mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/Light", { useMongoClient: true });
var db = mongoose.connection;

var light = require("./db.js")


db.once("open", function () {
    console.log("Veri Tabanina Baglanti Saglandi");

    ////Isik Kayitlari

    
    var light1 = new light({
        light_id: 1,
        state: false
    });
    light1.save(function (error) {
        if (error) {
            console.log("light1 kaydedilemedi");
        }
        else {
            console.log("Kaydedildi");
        }
    })

    var light2 = new light({
        light_id: 2,
        state: false
    });
    light2.save(function (error) {
        if (error) {

            console.log("light2 kaydedilemedi");
        }
        else {
            console.log("Kaydedildi");
        }
    })

    var light3 = new light({
        light_id: 3,
        state: false
    });
    light3.save(function (error) {
        if (error) {
            console.log("light3 kaydedilemedi");
        }
        else {
            console.log("Kaydedildi");
        }
    });

    var light4 = new light({
        light_id: 4,
        state: false
    });
    light4.save(function (error) {
        if (error) {
            console.log("light 4 kaydedilemedi");
        }
        else {
            console.log("Kaydedildi");
        }
    });

    var light5 = new light({
        light_id: 5,
        state: true
    });
    light5.save(function (error) {
        if (error) {
            console.log("light 5 kaydedilemedi");
        }
        else {
            console.log("Kaydedildi");
        }
    });

    

    ///// Isik Bulma

/*     light.find({}, function (error, docs) {
        console.log(docs);
    }); */
/*
    //// Isık Güncelleme
    light.update({ light_id: 1 }, { state: true }, function (error) {
        if (error) {
            console.log("Update Basarisiz");
        }
        else {
            console.log("Update Basarili");

        }
    })
})
*/

/* GET home page. */
/*
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
*/
//module.exports = router;

});

