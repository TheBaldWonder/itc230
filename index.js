'use strict'

var     books = require('./lib/books');

const express = require("express");
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(require("body-parser").urlencoded({extended: true}));

let handlebars = require("express-handlebars");
app.engine('.handlebars', handlebars({extname: '.handlebars'}));
app.set("view engine", ".handlebars");

//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');

var Book = require("./models/Book.js");

new Book({title: "Fake123", author: "John Fake", pubdate: 1999}).save(); 

// return all records
Book.find({}, function (err, items) {
  if (err) return next(err);
  console.log(items.length);
  // other code here
});

// send content of 'home' view
app.get('/', function(req,res){
    res.render('home', {siteName: "The Book Database", titles: ["The Great Gatsby", "Ulysses", "Moby Dick", "War and Peace", "Great Expectations"]});
});

app.get('/all', function(req,res){
    console.log(books.all());
});

app.get('/about', function(req,res){
    res.render('about');
});

app.get('/img/logo.jpg', function(req,res){
    res.render('logo.jpg');
});

app.post('/search', function(req,res){
    let result = books.get(req.body.title);
    
    if(!(books.get(req.body.title))){
        res.send('Searching for: ' + req.body.title + '<br>' + 
                 'No records found for: '  + req.body.title);
    } else {
        res.render('details', {title: req.body.title, result: result });
    } 
});

app.post('/remove', function(req,res){
    
    var result = books.remove(req.body.title);
    
   if(!result.deleted){
        res.send("No records found for: " + req.body.title);
    } else {
        res.send("Deleted: " + req.body.title);
//        res.send(JSON.stringify(books.remove(req.body.title)));
    }    
});

app.post('/add', function(req,res){
    var newBook = {
        title: req.body.title,
        author: req.body.author,
        pubdate: req.body.pubdate
    };
    var result = books.add(newBook);

    if(!result.added){
        res.send("Title is already in the collection: " + req.body.title);
    } else {
        res.send("Title added");
    }    
});

app.get('/headers', function(req,res){
   res.set('Content-Type','text/plain');    
   var s = '';    
   for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';    
   res.send(s);  
});


app.use(function(req,res){
    res.status(404).render('404');
});


app.listen(app.get('port'), function() {
 console.log('Express started'); 
});
