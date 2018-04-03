var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var contactusSchema = schema({
	name: {type:String},
    phone: {type:Number},
    email: {type:String},
    message: {type:String},
});
var contactusroute = module.exports = mongoose.model('contactquaries',contactusSchema);