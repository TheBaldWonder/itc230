const mongoose = require('mongoose');
const credentials = require("../lib/credentials");

// remote db settings
mongoose.connect(credentials.connectionString, { dbName: 'sccprojects', useNewUrlParser: true});

mongoose.connection.on ('open', ()=> {
    console.log('Mongoose connected.');
});



const mySchema = mongoose.Schema({
 title: { type: String, required: true },
 author: String,
 amount: Number,
 pubdate: Number
}, {collection : "books"}); 

module.exports = mongoose.model('Book', mySchema);

