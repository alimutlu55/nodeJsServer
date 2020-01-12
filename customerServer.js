var mongoose = require('mongoose');
var Customer = require('./customer')
var express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extendead: true }));
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://happy:1234@project-hyjio.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error)
        console.log(error);
    else
        console.log("Connected to the mongodb");
})
var server = app.listen(8000, function () {
    console.log('sunucu çalışıyor.')
});


app.post('/kayitEkle', function (req, res) {
    var customer1 = new Customer({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })
    customer1.save((error) => {
        if (error) {
            throw error
        }
        console.log('Kayıt Edildi')
        res.send('Kayıt Başarılı')
    })
})


app.post('/kayitSil', function (req, res) {
    Customer.findOneAndRemove({ email: req.body.email }, (error, data) => {
        if (error) {
            throw error
        }
        console.log('Kayıt Silindi')
    })
})

app.post('/kayitGuncelle', function (req, res) {
    console.log('geldi')
    Customer.findOneAndUpdate({ email: req.body.email }, {
        name: req.body.name,
        lastName: req.body.lastName,
    }, (error, data) => {
        if (error) {
            throw error
        }
        console.log('Kayıt güncellendi')
    })
})

app.post('/kayitGetir', function (req, res) {
    Customer.find({ email: req.body.email }, (error, data) => {
        if (error) {
            throw error
        }
        //console.log(res)
        console.log(data)
        res.send(data)
    })
})

