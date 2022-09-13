const express = require('express');
const db = require('./config/mongoose');
const app = express();
const User = require('./models/user');
const Admin = require('./models/admin');
const port = 8000;

const path = require('path');


app.use(express.static('./assets'));

app.use(express.urlencoded());


app.set('view engine', 'ejs');
app.set('views', './views');





app.use('/', require('./routes'));



app.listen(port, err => {
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
