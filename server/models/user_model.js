var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name : String,
});
UserSchema.path('name').required(true, 'User name cannot be blank');
mongoose.model('User', UserSchema);


