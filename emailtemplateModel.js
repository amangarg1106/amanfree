var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var emailtemplateSchema = schema({
	event : { type : String},
    htmlen : { type : String},
    htmlar : { type : String},
    status:{ type: String, required: true, default: 0 },
	createdby:{type: String},
    modifiedby:{ type: String},
    created:{ type: String, required: true, default: Date.now },
    modified:{ type: String, required: true, default: Date.now }
    });
var emailtemplateroute = module.exports = mongoose.model('emailtemplates',emailtemplateSchema);