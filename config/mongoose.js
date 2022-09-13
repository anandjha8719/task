const mongoose = require('mongoose');
// const env = require('./environment');

const uri = 'mongodb+srv://anandk_jha:12345@cluster0.jpkkkwm.mongodb.net/?retryWrites=true&w=majority'
    mongoose.connect(uri);



const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;