var express = require('express');
var app = express();
var fs = require('fs')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extendead: true }));
app.use(bodyParser.json())

var kullancıSayısı = 0
app.get('/listele', function (req, res) {
    // res.send('kullanıcı listeleyen servis')
    fs.readFile('kullanıcı.json', 'utf8', function (err, data) {
        console.log(data)
        res.end(data)
    })
})

app.post('/ekle', function (req, res) {
    console.log("body:"+req.body)
    var yenikullanici = {
        "k": {
            "isim": req.body.isim,
            "sifre": req.body.sifre,
            "email": req.body.email
        },
    }

    fs.readFile('kullanıcı.json', 'utf8', function (err, data) {
        data = JSON.parse(data)
        var id = "k" + kullancıSayısı
        data[id] = yenikullanici["k"]
        console.log(data)
        res.end(JSON.stringify(data))
        fs.writeFile('kullanıcı.json', JSON.stringify(data), function (err) {
            console.log('Bir hata oluştu')
        kullancıSayısı++
        })
    })
})
app.get('/sil', function (req, res) {
    fs.readFile('kullanıcı.json', 'utf8', function (err, data) {
        data = JSON.parse(data)
        var id = 'k' + req.query.id
        delete data[id]
        console.log(data)
        res.end(JSON.stringify(data))
        fs.writeFile('kullanıcı.json', JSON.stringify(data), function (err) {
            console.log('Bir hata oluştu')
        })
    })
})

app.get('/sorgula', function (req, res) {
    fs.readFile('kullanıcı.json', 'utf8', function (err, data) {
        data = JSON.parse(data)
        var id = 'k' + req.query.id
        console.log(data[id])
        res.end(JSON.stringify(data[id]))

    })
})

var server = app.listen(8000, function () {
    console.log('sunucu çalışıyor.')
});