const apiRoute = function (app){
    //Api Routes
    app.use('/api/vendor', require('./api/vendor'));
    app.use('/api/user', require('./api/User'));
    app.use('/api/reg', require('./api/registration'));
    app.use('/api/product', require('./api/product'));
    app.use('/api/login', require('./api/login'));
    app.use('/api/homepage', require('./api/homepage'));
    app.use('/api/home', require('./api/home'));
    app.use('/api/forgotPsw', require('./api/forgotPsw'));
    app.use('/api/admin', require('./api/admin'));
    app.use('/api/addvendor', require('./api/addVendor'));
    app.use('/api/adduser', require('./api/addUser'));
    app.use('/api/addproduct', require('./api/addProduct'));
    app.use('/api/addadmin', require('./api/addAdmin'));
    app.use('/api/ad', require('./api/ad'));

   // Hbs Routes
   app.use('/ad', require('./hbsPages/ad'))
   app.use('/addAdmin', require('./hbsPages/addAdmin'))
   app.use('/addproduct', require('./hbsPages/addProduct'))
   app.use('/adduser', require('./hbsPages/addUser'))
   app.use('/addvendor', require('./hbsPages/addVendor'))
   app.use('/admin', require('./hbsPages/admin'))
   app.use('/forgotpsw', require('./hbsPages/forgotPsw'))
   app.use('/home', require('./hbsPages/home'))
   app.use('/homepage', require('./hbsPages/homepage'))
   app.use('/login', require('./hbsPages/login'))
   app.use('/product', require('./hbsPages/product'))
   app.use('/reg', require('./hbsPages/registration'))
   app.use('/user', require('./hbsPages/user'))
   app.use('/vendor', require('./hbsPages/vendor'))

}

module.exports = {
    apiRoute
};

