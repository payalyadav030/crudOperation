const chalk = require('chalk');
const express = require('express');
const exphbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const app = express();

const PORT = 7898;

app.use(express.json());
app.use(express.urlencoded());
app.use( express.static(path.join(__dirname, 'public')));


const hbs = exphbs.create({
    extname : '.hbs'
})

var studentRoute = require('./routes/Logic.js');
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');


app.get('/users', studentRoute.retrieve)
app.delete('/users/:id', studentRoute.delete);
app.post('/users/add', studentRoute.add)
    


app.listen(PORT, function(){
    console.log("application has been started on port", PORT)
})