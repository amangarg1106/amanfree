var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var questionareSchema = schema({
	slug:{type:String, lowercase:true, trim:true},
	question:{type:String, lowercase:true, trim:true},
	answer:{type:String, lowercase:true, trim:true},
	status:{ type: String, required: true, default: 0 },
	createdby:{type: String},
    modifiedby:{ type: String},
    created:{ type: String, required: true, default: Date.now },
    modified:{ type: String, required: true, default: Date.now }
});
var questionareroute = module.exports = mongoose.model('questionares',questionareSchema);