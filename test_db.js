    
var Book = require("./models/book.js");

new Book({title: "Fake123", author: "John Fake", pubdate: 1999}).save(); 

// find all
Book.find((err,result)=>{
//console.log(result)    
});

Book.findOne({title:"Ulysses"},(err,result)=>{
//console.log(result)    
});

Book.remove({title:"Ulysses"},(err,result)=>{
console.log(result.result)    
});