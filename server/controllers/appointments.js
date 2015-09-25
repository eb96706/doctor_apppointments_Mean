var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

//========ACCESS THE DB FIND ALL THE APPOINTMENT===========
module.exports = (function(){
	return{
		show: function(req, res){
			Appointment.find({}, function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},   

//==========ADD APPOINTMENT INTO THE DB DATE/TIME/PATIENT NAME/COMPLAIN=========
		add: function(req, res){
			console.log(req.body);
			var add_appointment = new Appointment({date : req.body.date, time : req.body.time, name: req.body.user, user : req.body.user, complain : req.body.complain});
			console.log(add_appointment);
			add_appointment.save(function(err, response){
				if(err){
					console.log(err);
				}
				else{
					res.end();
				}
			})
		},
//================CANCEL OR DELETE APPOINTMENT===============================
		destroy: function(req, res){
			console.log(req.body);
			Appointment.remove({_id: req.body._id}, function(err, response){
				if(err){
					console.log(err);
				}
				else{
					res.end();
				}
			})
		}
	}
})(); 