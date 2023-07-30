const mongoose = require('mongoose');

const url = 'mongodb+srv://shiva850681:Kaliya8506@cluster0.cro6kwk.mongodb.net/Polling?retryWrites=true&w=majority'; // mongoodb url
mongoose.connect(url); // connecting to db

const db = mongoose.connection; // getting connection of db

db.on('error', console.error.bind(console, 'Error: connecting to db :: MongoDB')); // if error while conecting to db


// once connection is open (started)
db.once('open', (err) => {
    if (err) {
        console.log('Error: while opening db connection', err);
    } else {
        console.log('DB connection successfull :: MongoDB');
    }
})


module.exports = db;
