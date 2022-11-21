require('dotenv').config();
require('./db/mongoose');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const route = require('./routes')
const auth = require('./middleware/auth');
const checkRole = require('./middleware/checkRole');

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");

app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.static(publicDirPath));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Vendor = require('./models/vendor');
const Ad = require('./models/ad');
const Address = require('./models/address');
const Admin = require('./models/admin');
const Cart = require('./models/cart');
const Category = require('./models/category');
const Country = require('./models/country');
const Order = require('./models/order');
const Payment = require('./models/payment');
const Plan = require('./models/plan');
const Product = require('./models/product');
const Review = require('./models/review');
const State = require('./models/state');

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
app.get('/api/vendor', function(req, res){
       Vendor.find().then(function(result){
        res.status(200).send(result);        
    }).catch(function(error){
        res.status(500).send("Internal Server Error");
    })
})

app.post('/api/vendor', function (req, res) {
    console.log("input: ", req.body);
    const vendor = new Vendor(req.body);
    vendor.save().then(function(result){
        res.status(201).send("Records are saved successfully");
    }).catch(function(error){
          res.status(500).send("Internal server Error");
    })
})
  
app.delete('/api/vendor/:id', function(req, res){
    console.log("params Id", req.params.id);
    Vendor.findByIdAndDelete(req.params.id).then(function(result){
        res.status(200).send('User Record Deleted Succesfully')
    }).catch(function(error){
        res.status(500).send("Internal Server Error");
    })
})

app.put('/api/vendor/:id', function(req, res){
    Vendor.findByIdAndUpdate(req.params.id, req.body).then(function(result){
        res.status(201).send('User Record updated Succesfully');
    }).catch(function(error){
        res.status(500).send("Internal Server Error");
    })
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



route.apiRoute(app);

app.listen(process.env.PORT, function(){
    console.log("The server is up on PORT", process.env.PORT);
}) 









