var mongoose = require('mongoose');
var fs = require('fs');
// doctor_appointment
mongoose.connect('mongodb://localhost/doctor_appt');
var models_path =__dirname + '/../server/models';
fs.readdirSync(models_path).forEach(function(file){
	if( file.indexOf('.js') ){
		require(models_path + '/' + file);
	}
});