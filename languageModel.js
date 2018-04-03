var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var languagesSchema = schema({
	language:{type:String},
});
var languageroute = module.exports = mongoose.model('languages',languagesSchema);