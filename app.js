var express = require('express');
var todoControler = require('./controlers/todocontroller');

var app = express();


//set up template engine
app.set('view engine', 'ejs');


//static files
app.use(express.static('./public'));

//fire controllers
todoControler(app);


//listen to port
app.listen(3000);
console.log('You are listening to port 3000');
