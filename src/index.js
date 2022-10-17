const express = require('express');
const path = require('path');
const app = express();

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");

app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.static(publicDirPath));

app.get('/reg', function (req, res) {
    res.render('registration');
})

app.get('/homepage', function (req, res) {
    res.render('homepage');
})

app.get('/home', function (req, res) {
    res.render('home');
})

app.get('/admin', function (req, res) {
    res.render('admin');
})

app.get('/product', function (req, res) {
    res.render('product');
})

app.get('/product/add', function (req, res) {
    res.render('addProduct');
})

app.get('/vendor', function (req, res) {
    res.render('vendor');
})

app.get('/vendor/add', function (req, res) {
    res.render('addVendor');
})

app.get('/user', function (req, res) {
    res.render('user');
})

app.get('/user/add', function (req, res) {
    res.render('addUser');
})

app.get('/admin/add', function (req, res) {
    res.render('addAdmin');
})

app.get('/forgotpassword', function (req, res) {
    res.render('forgotPsw');
})

app.get('/login', function (req, res) {
    res.render('login');
})

app.get('/ad', function (req, res) {
    res.render('ad');
})



app.listen(8081, function(){
    console.log("The server is up on Port 8081");
}) 









