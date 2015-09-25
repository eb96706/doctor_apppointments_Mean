var user = require('./../server/controllers/user_controller');
var appointments = require('./../server/controllers/appointments');


module.exports = function(app){
	//=================USERS ROUTE=====================
	app.get('/get_user', function (req, res){
		user.show(req, res);
	});
	app.post('/add_user', function(req, res){
		console.log(req.body);
		user.add(req, res);
	});
	//=================APPOINTMENTS ROUTE=================
	app.get('/appointments', function (req, res){
		appointments.show(req, res);
	});
	app.post('/add_appointment', function (req, res){
		console.log(req.body);
		appointments.add(req, res);
	});
	app.post('/destroy_appointment', function (req, res){
		console.log(req.body);
		appointments.destroy(req, res);
	});
};

