//top of the page so that we can access our model through var Friend
//need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return{
		show: function(req, res){
			User.findOne({}, function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},   //ADD COMMA
		add: function(req, res){
			var add_user = new User({name : req.body.name});
			add_user.save(function(err, response){
				if(err){
					console.log(err);
				}
				else{
					res.end();
				}
			})
		}
	}
})(); //<---------------invoke!!!!!