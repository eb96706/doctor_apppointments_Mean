
/*
 REQUIRE EXPRESS TO BUILD EXPRESS APP
 						  PATH 
 						  BODY-PARSER
*/
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// INSTANTIATE TEH APP
var app = express();
app.use(bodyParser.json());

// SETUP STATIC FILE SERVER THAT POINTS TO THE CLIENT DIRECTORY 
app.use(express.static(path.join(__dirname, './client')));


require('./config/mongoose.js');
require('./config/routes.js')(app);

app.listen(9000, function(){
	console.log("PORT 9000 on is working");
});