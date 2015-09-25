
var mongoose = require('mongoose');

//========CREATION OF SCHEMA=========

var AppointmentSchema = new mongoose.Schema({
	date : Date,
	time : String,
	name : String,
	complain : String 
});
// ==============NO BLANK SPACE ====================
AppointmentSchema.path('date').required(true, 'User date cannot be blank');
AppointmentSchema.path('time').required(true, 'User time cannot be blank');
//================AT LEAST 10 CHARACTER =========
AppointmentSchema.path('complain').validate(function (v) {return v.length > 9;}); 

//=======USING SCHEME TO CREATE THE MODEL AND COLLECTION IN DB ============
mongoose.model('Appointment', AppointmentSchema);
