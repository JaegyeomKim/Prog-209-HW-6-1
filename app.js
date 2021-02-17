var express = require('express');
var path = require('path');

//leaving in the bodyParser in case we ever send up form data and need to get data out of form
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// just one "site" with 2 pages, / and about

// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});


app.get('/index', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});


// upLoadData page 
// sending a get with 1 param
// http://localhost:3000/uploadData?msg=answer%20to%20everything&id=42
app.get('/uploadData', function(req, res) {
    let idVar = req.param('id');
    let msgVar = req.param('msg');
    // passing an object, used like a dictionary, to the render code
    res.render('pages/uploadData', { 
        value1PassedToRenderPage: idVar,
        value2PassedToRenderPage: msgVar
     });
  });



// error page 
app.get('/error', function(req, res) {
    // should get real data from some real operation, but instead ...
    let message = "some text from someplace";
    let errorObject ={
        status: "this is real bad",
        stack: "somebody called #$% somebody who called somebody <awful>"
    };
    res.render('pages/error', {  // pass the data to the page renderer
        message: message,
        error: errorObject
    });
});


// New Works (JK)
app.get('/show', function(req, res) {
    // should get real data from some real operation, but instead ...
    let show1 = "Walking Dead"
    let show2 = "Conantv"
    let show3 = "National Geographic"
    let show4 = "Discovery"

    res.render('pages/show', {  // pass the data to the page renderer
        message1: show1,
        message2: show2,
        message3: show3,
        message4: show4
    });
});




//Team Work (DC)
app.get('/movies', function(req, res) {
    // should get real data from some real operation, but instead ...
    let show5 = "Jexi"
    let show6 = "Venom"
    let show7 = "Menace To Society"
    let show8 = "All Eyes On Me"

    res.render('pages/movies', {  // pass the data to the page renderer
        message5: show5,
        message6: show6,
        message7: show7,
        message8: show8
    });
});






app.listen(3000);  // not setting port number in www.bin, simple to do here
console.log('3000 is the magic port');

module.exports = app;
